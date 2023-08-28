/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-26 15:07:36
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-28 18:23:42
 * @FilePath: /graphQL/backend/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql').graphqlHTTP;
const {buildSchema} = require('graphql')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Event = require('./models/event')
const User = require('./models/user')

const app = express();

app.use(bodyParser.json());

app.use('/graphql',graphqlHttp({
    schema:buildSchema(`
        type Event{
            _id :ID!
            title:String!
            description:String!
            price:Float
            date:String!
        }
        type User{
            _id:ID!
            email: String!
            password:String
        }
        input EvnetInput{
            title:String!
            description:String!
            price:Float
            date:String!

        }
        input UserInput{
            email: String!
            password:String!
        }
        type RootQuery{
            events:[Event!]!
        }
        type RootMutation{
            createEvent(eventInput:EvnetInput!):Event
            createUser(userInput:UserInput!):User
        }
        schema{
            query:RootQuery
            mutation:RootMutation
        }
    `),
    rootValue:{
        events:() => {
            return Event.find().then(events =>{
                
                return events.map(event =>{
                    return {...event._doc,_id:event._doc._id.toString()}
                })
            }).catch(err =>{
                console.log(err);
                throw err;
            });
        },
        createUser:(args) => {
            return User.findOne({email:args.userInput.email}).then(user => {
                if(user){
                    throw new Error('User exists already')
                }
                return bcrypt
                .hash(args.userInput.password,12)
            })
            .then(hashedPassword => {
                
                const user = new User({
                    email:args.userInput.email,
                    password:hashedPassword
                });
                return user.save();
            })
            .then(result =>{
                return {...result._doc,id:result.id}
            })
            .catch(err => {
                throw err;
            })

        },
        createEvent:(args) => {
            const event = new Event({
                title : args.eventInput.title,
                description:args.eventInput.description,
                price:+args.eventInput.price,
                date:new Date(args.eventInput.date),
                creator:'64ed1b53678fce181932be27'
            })
            let createdEvent;
            return event.save().then(result =>{
                createdEvent = {...result._doc,_id : result.id}
                return User.findById('64ed1b53678fce181932be27').then(user =>{
                    user.createEvents.push(event);
                    return user.save();
                })
            })
            .then(user =>{
                return createdEvent;

            })
            .catch(err =>{
                console.log(err);
                throw err;
            });
            

        }
    },
    graphiql:true

}));
mongoose.connect(process.env.MONGO_URL
    ).then(()=>{
        app.listen(3000);
    }).catch(err =>{
        console.log(err);
    })
  
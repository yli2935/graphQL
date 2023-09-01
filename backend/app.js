/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-26 15:07:36
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 17:09:53
 * @FilePath: /graphQL/backend/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const graphqlHttp = require('express-graphql').graphqlHTTP;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');
const app = express();

app.use(bodyParser.json());
app.use(isAuth);
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);


mongoose.connect(process.env.MONGO_URL
    ).then(()=>{
        app.listen(3000);
    }).catch(err =>{
        console.log(err);
    })
  
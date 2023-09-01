/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-31 14:34:33
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 17:24:34
 * @FilePath: /graphQL/backend/graphql/resolvers/event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Event = require('../../models/event');

const { transformEvent } = require('./merge');
  
module.exports = {
    events: async () => {
      try {
        const events = await Event.find();
        return events.map(event => {
          return transformEvent(event);
        });
      } catch (err) {
        throw err;
      }
    },
    createEvent: async (args,req) => {
      if(!req.isAuth){
        throw new Error('Unauthenticated!')
      }
      
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: req.userId
      });
      let createdEvent;
      try {
        const result = await event.save();
        createdEvent = transformEvent(result);
        const creator = await User.findById(req.userId);
  
        if (!creator) {
          throw new Error('User not found.');
        }
        creator.createdEvents.push(event);
        await creator.save();
  
        return createdEvent;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  };
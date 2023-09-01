/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-31 14:34:53
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 17:25:23
 * @FilePath: /graphQL/backend/graphql/resolvers/booking.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Event = require('../../models/event');
const Booking = require('../../models/booking');
const {transformBooking, transformEvent } = require('./merge');

module.exports = {
  bookings: async (args,req) => {
    if(!req.isAuth){
        throw new Error('Unauthenticated!')
      }
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },
  bookEvent: async (args,req) => {
    const fetchedEvent = await Event.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: req.userId,
      event: fetchedEvent
    });
    const result = await booking.save();
    return transformBooking(result);
  },
  cancelBooking: async (args,req) => {
    if(!req.isAuth){
        throw new Error('Unauthenticated!')
      }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};
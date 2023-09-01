/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-31 14:34:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 14:34:19
 * @FilePath: /graphQL/backend/graphql/resolvers/merge.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Event = require('../../models/event');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return transformEvent(event);
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    throw err;
  }
};

const transformEvent = event => {
  return {
    ...event._doc,
    _id: event.id,
    date: dateToString(event._doc.date),
    creator: user.bind(this, event.creator)
  };
};

const transformBooking = booking => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: user.bind(this, booking._doc.user),
    event: singleEvent.bind(this, booking._doc.event),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt)
  };
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
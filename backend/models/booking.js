/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-31 12:59:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 12:59:17
 * @FilePath: /graphQL/backend/models/booking.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-28 15:42:40
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-28 16:59:34
 * @FilePath: /graphQL/backend/models/event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    
});

module.exports = mongoose.model('Event',eventSchema);

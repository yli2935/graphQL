/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-28 16:55:34
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-28 17:00:26
 * @FilePath: /graphQL/backend/models/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createEvents:[
        {
            type:Schema.Types.ObjectId,
            ref:'Event'
        }
    ]
})

module.exports = mongoose.model('User',userSchema);
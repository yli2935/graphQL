/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-31 14:44:52
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 14:44:58
 * @FilePath: /graphQL/backend/helpers/date.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
exports.dateToString = date => new Date(date).toISOString();
/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-08-30 15:42:20
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-08-31 14:39:55
 * @FilePath: /graphQL/backend/graphql/resolvers/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
};

module.exports = rootResolver;
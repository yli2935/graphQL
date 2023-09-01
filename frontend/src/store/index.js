/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-01 17:19:11
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-01 17:20:43
 * @FilePath: /graphQL/frontend/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';

const store = configureStore({
    reducer: reducers
  });
  
  const { dispatch } = store;
  
  export { store, dispatch };
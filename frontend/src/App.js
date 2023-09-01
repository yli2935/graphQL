/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-01 14:44:04
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-01 17:07:05
 * @FilePath: /graphQL/frontend/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
function App() {
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}

export default App;

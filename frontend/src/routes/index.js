/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-01 16:14:24
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-01 17:16:02
 * @FilePath: /graphQL/frontend/routes/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRoutes } from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import EventsRoutes from './EventsRoutes';
import BookingsRoutes from './BookingsRoutes';
import NotFound from './NotFound';

export default function ThemeRoutes() {
    return useRoutes([AuthRoutes,EventsRoutes,BookingsRoutes,NotFound]);
}
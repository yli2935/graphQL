/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-01 16:47:13
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-01 17:03:54
 * @FilePath: /graphQL/frontend/pages/Auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { authenticationActions } from "../store/reducers/auth";

const Auth = () => {
  const dispatch = useDispatch();


  return (
     <h1>The Auth Page</h1>
  );
};

export default Auth;
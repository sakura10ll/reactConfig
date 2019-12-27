/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-19 19:54:52
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
// import store from './reduxTest/store';


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// store.subscribe(()=>{
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   )
// })
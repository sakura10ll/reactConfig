/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-19 19:54:52
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import FromTest from './formTest';
import ReduxTest from './reduxTest';
import { Provider } from 'react-redux';
import store from './reduxTest/store/index';

function App() {
  return (
    <Provider store={store}>
      <ReduxTest></ReduxTest>
    </Provider>
  );
}

export default App;

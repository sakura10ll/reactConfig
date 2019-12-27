/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-27 16:11:36
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { counterReducer } from './countReducer';

 // applyMiddleware 引入中间件
const store = createStore(
  // counterReducer,
  combineReducers({ counter: counterReducer}), // counter是当前reducer的命名空间名
  applyMiddleware(logger, thunk)
);

export default store;
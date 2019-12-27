/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-23 15:08:42
 */
import React, { Component } from 'react'
import Header from '../components/header'
import Content from '../components/content'
import Provider from '../react-redux';


// 构建store
function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer);

class ReactRedux extends Component {

  render () {

    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactRedux = <Provider store={store}><ReactRedux/></Provider>

export default ReactRedux;
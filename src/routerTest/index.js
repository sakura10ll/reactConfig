/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-27 17:15:09
 */
import React, { component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';



function Home(){
  return <div>
    <div>列表</div>
    <ul>
      <li>
        <Link to='detail/name'>name</Link>
      </li>
      <li>
        <Link to='detail/age'>age</Link>
      </li>
    </ul>
  </div>
}

function About(){
  return <div>About</div>
}


// params是传递进来的路由器对象
function Detail(params){
  //  history 导航指令
  //  match 获取当前参数信息
  //  location 获取当前url信息
  console.info(params);
  return <div>
    当前信息
  </div>
}


export default function RouterTest(){
  
  return(
    <div>
      <BrowserRouter>
        <div>
          {/* 导航链接 */}
          <div>
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          {/* 路由配置 */}
          <Route exact path='/' component={Home}></Route>
          <Route path='/detail/:person' component={Detail}></Route>
          <Route path='/about' component={About}></Route>
        </div>
      </BrowserRouter>
    </div>
  )
}

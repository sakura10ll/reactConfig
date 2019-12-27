/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-27 17:05:46
 */
export const counterReducer = (state = 0, action) =>{
  switch (action.type){
    case 'add':
      return state +1;
    case 'minus':
      return  state-1;
    default:
      return state;
  }
};

export const add = () => ({ type: "add"});

export const minus = () => ({ type: "minus"});

export const asyncAdd = () => dispatch =>{
  // 异步操作
  setTimeout(()=>{
    dispatch({
      type: 'add'
    })
  },1500)
}
import React, { Component } from 'react';
// import store from './store';
import { connect } from 'react-redux';
import { add, minus, asyncAdd } from './store/countReducer';

const mapStateToProps = state => ({ num: state.counter });
const mapDispatchToProps = {add, minus, asyncAdd}

//  function ReduxTest({num, add, minus}){
//   return (
//     <div>
//       <p>{num}</p>
//       <div><button onClick={add}>+</button></div>
//       <div><button onClick={minus}>-</button></div>
//     </div>
//   );
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReduxTest);

// 装饰器写法
@connect(mapStateToProps,mapDispatchToProps)
class ReduxTest extends Component{
  render(){
    const { num, add, minus, asyncAdd} = this.props;
    return (
      <div>
        <p>{num}</p>
        <div><button onClick={add}>+</button></div>
        <div><button onClick={minus}>-</button></div>
        <div><button onClick={asyncAdd}>asyncAdd</button></div>
      </div>
    );
  }
}

export default ReduxTest;
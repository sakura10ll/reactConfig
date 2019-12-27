/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-27 17:15:09
 */
import React, { component } from 'react';

class RouterTest extends Component{
  
  render(){
    const { getFieldDec } = this.props;
    return(
      <div>
        {getFieldDec("name",{
          rules: [{ required: true, message: '不能为空' }]
        })(<Input />)}
        <Button onClick={this.onSubmit}>登陆</Button>
      </div>
    )
  }
}

export default FormTest;
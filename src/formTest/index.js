/*
 * @Title: BONC - React
 * @Descripttion: 
 * @Company: 北京东方国信科技股份有限公司
 * @Author: renlulu
 * @Date: 2019-12-27 11:01:19
 */
import React, { Component, PureComponent } from 'react';
import { Input, Button } from 'antd';

function FormTestCeate (Comp){
  return class extends Component{
    constructor(props){
      super(props);
      this.options = {};
      this.state = {};
      
    }

    handleChange = e =>{
      const { name, value } = e.target;
      console.info(name,value)
      this.setState({
        [name]: value
      }, ()=>{
        this.validateField(name)
      })
    }

    // 单项校验
    validateField = (name) =>{
      const rules = this.options[name].rules;
      // 任意一项失败则返回失败
      const result = !rules.some((rule)=>{
        if(rule.required){
          if(!this.state[name]){
            this.setState({
              [name+'Message']: rule.message
            })
            return true
          }
        }
      })
      return result;
    }


    // 多项校验
    valAll = (fn) =>{
      const result = Object.keys(this.options).map((field)=>{
        return this.validateField(field);
      });
    
      const isSubmit = result.every(v => v===true);

      fn(isSubmit, this.state);
    }

    // 创建input包装器
    getFieldDec = (field, option) =>{
      // 保存当前输入项的数据
      this.options[field] = option;
      return InputComp => (
        <div>
          {React.cloneElement(InputComp,{
            name: field,
            value: this.state[field] || "",
            onChange: this.handleChange
          })}
          {this.state[field+'Message']?<p>{this.state[field+'Message']}</p>:""}
        </div>
      )
    }

    render(){
      return <Comp getFieldDec={this.getFieldDec} valAll={this.valAll}></Comp>
    }
  }
}

@FormTestCeate
class FormTest extends Component{
  onSubmit = () =>{
    this.props.valAll((isVal, data)=>{
      if(isVal){
        // 进行登陆操作
      }else{
        alert('校验失败');
      }
    })
  }
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
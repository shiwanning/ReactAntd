import React, { Component } from 'react';

import { Form, Button, message, Row, Col, Input, Card, Icon, Checkbox } from 'antd';


const FormItem = Form.Item;
class FormLogin extends Component{
    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                             <Button type="primary">Login</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{width:300}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                initialValue: '',
                                rules: [
                                    {
                                    required: true,
                                    message: 'Please input your username!',
                                    },
                                    {
                                        min: 5, max: 10,
                                        message: '长度不在范围内'
                                    },
                                    {
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '用户名必须为字母或者数字'
                                    }
                                ]
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} placeholder="Username"/>}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('passWord', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                initialValue: '',
                                valuePropName: 'checked',
                            })(<Checkbox>Remember Me</Checkbox>)}
                            <a className="login-form-forgot" href="" >Forgot password</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }

    handleSubmit = () => {
        const { getFieldsValue, validateFields } = this.props.form;
        const userInfo = getFieldsValue();
        validateFields((err, values) => {
            if (!err) {
                message.success(
                    `userName:${userInfo.userName},passWord:${userInfo.passWord}`
                )
            }
        })
    };
}


export default Form.create()(FormLogin);
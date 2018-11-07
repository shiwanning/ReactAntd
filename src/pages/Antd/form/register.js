import React, { Component } from 'react';

import { Form, Button, message, Row, Col, Input, Card, Icon, Checkbox } from 'antd';


const FormItem = Form.Item;
class FormRegister extends Component{
    render() {

        const { getFieldDecorator } = this.props.form;


        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4,
            },
            wrapper: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4,
                }
            }
        };
        return (
            <div>
                <Card title="Regist Form">
                    <Form layout="horizontal">
                        <FormItem label="UserName" {...formItemLayout}>
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


export default Form.create()(FormRegister);
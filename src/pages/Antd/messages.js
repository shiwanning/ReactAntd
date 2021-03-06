import React, { Component } from 'react';
import { Card, Button, message} from 'antd';

export default class Messages extends Component{

    showMessage = (type) => {
        message[type]("根据类型提示信息！");
    };

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                   <Button type="primary" onClick={()=>{this.showMessage('success')}}>Success</Button>
                   <Button type="primary" onClick={()=>{this.showMessage('info')}}>info</Button>
                   <Button type="primary" onClick={()=>{this.showMessage('warning')}}>warning</Button>
                   <Button type="primary" onClick={()=>{this.showMessage('error')}}>error</Button>
                   <Button type="primary" onClick={()=>{this.showMessage('loading')}}>loading</Button>
                </Card>
            </div>
        )
    }
}
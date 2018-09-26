import React, { Component } from 'react';
import { Button, Card, notification} from 'antd';



export default class Notices extends Component{

    openNotification = (type,direction) => {
        if (direction) {
            notification.config({
                placement: direction
            });
        }
        notification[type]({
            message: '通知提醒框',
            description:'这是一个通知',
        })
    };



    render() {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>error</Button>
                </Card>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info','topRight')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning','bottomLeft')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>error</Button>
                </Card>
            </div>
        )
    }
}
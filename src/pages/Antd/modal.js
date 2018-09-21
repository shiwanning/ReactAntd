import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

export default class ModalShow extends Component{
    state = {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
    }

    showModal = (param) => {
        this.setState({
            [param]: true,
        })
    };

    handleOk = (e, param) => {
        console.log(e);
        this.setState({
            [param]: false,
        });
    };
    handleCancel = (e, param) => {
        console.log(e);
        this.setState({
            [param]: false,
        });
    };

    handleConfirm = (param) => {
        Modal[param]({
            title: 'ok?',
            content: '......',
            onOk: () => {
                console.log('ok');
            },
            onCancel: () => {
                console.log('cancel');
            }
        })
    };
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.showModal('visible1')}>Open</Button>
                    <Button type="primary" onClick={() => this.showModal('visible2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.showModal('visible3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.showModal('visible4')}>水平垂直居中</Button>
                </Card>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>error</Button>
                </Card>
                <Modal
                    title="Open"
                    visible={this.state.visible1}
                    onOk={(e) => this.handleOk(e,'visible1')}
                    onCancel={(e) => this.handleCancel(e,'visible1')}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    title="自定义页脚"
                    visible={this.state.visible2}
                    okText="oso"
                    cancelText="clc"
                    onOk={(e) => this.handleOk(e,'visible2')}
                    onCancel={(e) => this.handleCancel(e,'visible2')}>
                    <p>自定义页脚</p>
                </Modal>
                <Modal
                    title="顶部20px弹框"
                    visible={this.state.visible3}
                    style={{top:20}}
                    onOk={(e) => this.handleOk(e,'visible3')}
                    onCancel={(e) => this.handleCancel(e,'visible3')}>
                    <p>顶部20px弹框</p>
                </Modal>
                <Modal
                    title="水平垂直居中"
                    visible={this.state.visible4}
                    wrapClassName="vertical-center-modal"
                    onOk={(e) => this.handleOk(e,'visible4')}
                    onCancel={(e) => this.handleCancel(e,'visible4')}>
                    <p>水平垂直居中</p>
                </Modal>
            </div>
        )
    }
}
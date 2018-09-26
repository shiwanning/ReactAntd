import React, { Component } from 'react';
import { Card, Icon, Button, Alert, Spin } from 'antd';


export default class Loadings extends Component{
    
    render() {
        const icon = <Icon type="loading" style={{fontSize:24}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{ margin: '0 10px' }} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true}/>    
                </Card>
                <Card title="Spin遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="welcome"
                        type="error"
                        style={{ marginBottom: 10 }}
                        showIcon
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="welcome"
                            type="warning"
                            style={{ marginBottom: 10 }}
                            showIcon
                        />
                    </Spin>
                    <Spin tip="Loding...">
                        <Alert
                            message="React"
                            description="welcome"
                            type="warning"
                            style={{ marginBottom: 10 }}
                            showIcon
                        />
                    </Spin>
                    <Spin indicator={icon} tip="Loading...">
                        <Alert
                            message="React"
                            description="welcome"
                            type="warning"
                            style={{ marginBottom: 10 }}
                            showIcon
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less';
export default class ButtonShow extends Component{

    componentWillMount() {
        this.setState({
            loading: true,
            size: 'default',
        });
    }
    onLoading = () => {
        this.setState({
            loading: false,
        })
    };
    handleRadioChange = (e) => {
        this.setState({
            size: e.target.value,
        })  
    };
    render() {
        const { loading } = this.state;
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="default">Default</Button>
                    <Button type="dashed">Dashed</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button  icon="plus">Create</Button>
                    <Button  icon="edit">Edit</Button>
                    <Button  icon="delete">Delete</Button>
                    <Button shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button type="primary" icon="download">Download</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button  loading={loading} type="primary">Submit</Button>
                    <Button shape="circle" type="primary" loading={loading} />
                    <Button shape="circle" loading={loading}/>
                    <Button loading={loading}>Loading....</Button>
                    <Button type="primary" onClick={this.onLoading}>Close</Button>
                </Card>
                <Card title="按钮组" className="card-btn-group">
                    <Button.Group>
                        <Button type="primary"  icon="left">返回</Button>
                        <Button type="primary"  icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleRadioChange}>
                        <Radio value="small">small</Radio>
                        <Radio value="default">default</Radio>
                        <Radio value="large">large</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Primary</Button>
                    <Button type="danger" size={this.state.size}>Danger</Button>
                    <Button type="default" size={this.state.size}>Default</Button>
                    <Button type="dashed" size={this.state.size}>Dashed</Button>
                </Card>
            </div>
        )
    }
}
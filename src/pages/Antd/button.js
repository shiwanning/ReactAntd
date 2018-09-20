import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './ui.less';
import ButtonGroup from 'antd/lib/button/button-group';
export default class ButtonShow extends Component{

    componentWillMount() {
        this.setState({
            loading: true,
        });
    }
    onLoading = () => {
        this.setState({
            loading: false,
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
                    <ButtonGroup>
                        <Button type="primary" icon="cloud">group1</Button>
                        <Button type="primary" icon="cloud">group2</Button>
                    </ButtonGroup>
                </Card>
            </div>
        )
    }
}
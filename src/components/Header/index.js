import React, { Component } from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import './index.less';
export default class Header extends Component{


    componentWillMount(){
        this.setState({
            userName: 'userName',
            time: moment().format('LL'),
        });
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>Welcome,{this.state.userName}!</span>
                        <a href="#">Logout</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={5} className="breadcrumb-title">
                          首页
                    </Col>
                    <Col span={19} className="weather">
                        <span className="date">{this.state.time}</span>
                        <span className="weather-detail">Weather</span>
                    </Col>
                </Row>
            </div>
        )
    }   
}
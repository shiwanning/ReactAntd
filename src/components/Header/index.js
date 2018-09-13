import React, { Component } from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import Utils from '../../util';
import './index.less';
import Axios from '../../axios'
export default class Header extends Component{


    componentWillMount(){
        this.setState(() => ({
            userName: 'userName',
            time: moment().format('LL'),
        }));
        setInterval(() => {
            let sysTime = Utils.formatDate(new Date().getTime());
            this.setState(() => ({
                sysTime,
            }));
        }, 1000);
        
        this.getWeatherApiData();
    }

    getWeatherApiData = () => {
        let city = '北京';
        Axios.jsonp({
           url:`http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
       })
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
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">Weather</span>
                    </Col>
                </Row>
            </div>
        )
    }   
}
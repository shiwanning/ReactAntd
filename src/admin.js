import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import menuList from './config/menuConfig';

export default class Admin extends Component{
    render() {
        return (
            <Row>
                <Col span={3}>
                   <NavLeft></NavLeft>
                </Col>
                <Col span={21}>
                    <Header></Header>
                    <Row>
                        <Col>content</Col>
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>          
         )
     }
}
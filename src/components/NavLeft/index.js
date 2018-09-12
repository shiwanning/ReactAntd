import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig';
import './index.less';
const { SubMenu } = Menu;

export default class NavLeft extends Component{

    componentWillMount() {
        const menu = this.renderMenu(menuList);
        this.setState(
            () => ({
                menu,
            })
        );
    }
    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
                if (item.children) {
                    return <SubMenu title={<span><Icon type="mail" /><span>{item.title}</span></span>} key={ item.key }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                }
            return <Menu.Item key={item.key}>{<span><Icon type="appstore" /><span>{item.title}</span></span>}</Menu.Item>
        })
    };
    onHandleClick = (e) => {
        console.log('click', e);
    };

    render() {
        return (
            <div>
                <div className="logo">
                    <img alt="" src="/assets/logo-ant.svg" />
                    <h1>Test MS</h1>
                </div>
                <Menu onClick={this.onHandleClick} theme="dark">
                    {this.state.menu}
                </Menu>
            </div>
            
        )
    }   
}
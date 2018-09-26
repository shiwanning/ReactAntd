import React, { Component } from 'react';
import { Button, Card, Tabs, message, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export default class TabsExample extends Component{
    newTabIndex = 0;
    componentWillMount() {
        const panels = [{
            key: 1,
            title: 'tab1',
            content:'tab1',
        },
        {
            key: 2,
            title: 'tab2',
            content:'tab2',
        },
        {
            key: 3,
            title: 'tab3',
            content:'tab3',
            }];
        
        this.setState({
            activeKey: panels[0].key,
            panels,
        });
    }



    handleCallback = (key) => {
        message.info("Hi,您选择了页签：" + key);
    };

    handleChange = (key) => {
        this.setState({
            activeKey: key,
        })
    };
    handleEdit = (targetKey,action) => {
        this[action](targetKey);
    };

    add = () => {
        this.setState(
            (preState) => {
                const activeKey = `newTab${this.newTabIndex++}`;
                preState.panels.push({
                    title: activeKey,
                    key: activeKey,
                    content: 'New Tab Pane'
                });
                return {
                    panels: preState.panels,
                    activeKey,
                }
           }
        );
    };

    remove = (targetKey) => {
        this.setState(
            (preState) => {
                let lastKeyIndex = 0;
                preState.panels.forEach((element,index) => {
                    if (element.key === targetKey) {
                        lastKeyIndex = index - 1
                    }
                });
                const panels = preState.panels.filter(pane => pane.key === targetKey);
                return {
                    activeKey: lastKeyIndex,
                    panels,
                }
            }
        )
    };
    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs>
                        <TabPane tab="tab1" key="1">Tab1</TabPane>
                        <TabPane tab="tab2" key="2">Tab2</TabPane>
                        <TabPane tab="tab3" key="3">Tab3</TabPane>                  
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">React是一个非常受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs
                        activeKey={this.state.activeKey}
                        onChange={this.handleChange}
                        onEdit={this.handleEdit}
                        type="editable-card"
                    >
                        {this.state.panels.map(
                            (item) =>
                                <TabPane tab={item.title} key={item.key}>
                                   {item.content}  
                                </TabPane>
                        )}
                    </Tabs>
                </Card>
            </div>
        )
    }
}
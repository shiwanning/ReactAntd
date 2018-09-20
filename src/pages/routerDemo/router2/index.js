import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './../router1/about';
import Main from './../router1/main';
import Topic from './../router1/topic';
import NoMatch from './Nomatch';
import Home from './ui';
export default class Home2 extends Component{
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route exact path="/" component={About}></Route>
                        <Route  path="/main" component={() => 
                            <Main>
                                <Switch>
                                    <Route  path="/main/about/:id" component={About}></Route>
                                    <Route  path="/main/topic" component={Topic}></Route>
                                    <Route  component={NoMatch}/>
                                </Switch>
                            </Main>
                        }></Route>
                        <Route  path="/topic" component={Topic}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route component={NoMatch}/>
                    </Switch>
                </Home>                    
                
            </HashRouter>
        )
    }
}
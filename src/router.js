import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/Login';
import NoMatch from './pages/Nomatch';
import ButtonShow from './pages/Antd/button';
import ModalShow from './pages/Antd/modal.js';
export default class IRouter extends Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/admin" component={() => {
                            return (
                                    <Admin>
                                        <Switch>
                                            <Route path="/admin/ui/buttons" component={ButtonShow} />
                                            <Route path="/admin/ui/modals" component={ModalShow}/>
                                            <Route component={NoMatch} />
                                        </Switch>
                                    </Admin>
                            )
                        }} />
                        {/* <Route component={NoMatch} />  */}
                        <Route component={Login}/> 
                    </Switch>
                </App>
           </HashRouter>
        )
    }
}

import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/Login';
import NoMatch from './pages/Nomatch';
import ButtonShow from './pages/Antd/button';
import ModalShow from './pages/Antd/modal';
import Loadings from './pages/Antd/loading';
import Notices from './pages/Antd/notice';
import Messages from './pages/Antd/messages';
import TabsExample from './pages/Antd/tabs';
import Carousels from './pages/Antd/carousel';
import Gallery from './pages/Antd/gallery';
import FormLogin from './pages/Antd/form/login';
import Register from './pages/Antd/form/registerShow';

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
                                            <Route path="/admin/ui/loadings" component={Loadings}/>
                                            <Route path="/admin/ui/notification" component={Notices} />
                                            <Route path="/admin/ui/messages" component={Messages} />
                                            <Route path="/admin/ui/tabs" component={TabsExample} />
                                            <Route path="/admin/ui/carousel" component={Carousels} />
                                            <Route path="/admin/ui/gallery" component={Gallery}/>
                                            <Route path="/admin/form/login" component={FormLogin}/>
                                            <Route path="/admin/form/reg" component={Register}/>
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

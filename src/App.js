import React, { Component } from 'react';
import './App.css';

//babel-plugin-import(按需加载)
//import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

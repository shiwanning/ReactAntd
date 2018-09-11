import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';

//babel-plugin-import(按需加载)
//import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>antd</Button>
      </div>
    );
  }
}

export default App;

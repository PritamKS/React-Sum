import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import store from './components/store'
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}><Main/></Provider>
      </div>
    );
  }
}

export default App;

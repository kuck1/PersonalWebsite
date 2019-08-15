
import React, { Component } from 'react';
import './App.css';
import Index from './components/index'

export default App;

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="colorlib-main">
          <Index></Index>
          </div>
      </div>
    );
  }
}
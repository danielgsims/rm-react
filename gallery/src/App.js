import React, { Component } from 'react';
import './assets/css/spark.css';
import Button from './sprk/components/button/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
              <li><Button type="primary">Primary Button</Button> </li>
              <li><Button type="secondary">Secondary Button</Button></li>
              <li><Button type="tertiary">Tertiary Button</Button></li>
              <li><Button type="primary" disabled={true}>Disabled Button</Button></li>
          </ul>
      </div>
    );
  }
}

export default App;

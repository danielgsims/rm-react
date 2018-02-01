import React, { Component } from 'react';
import './assets/css/spark.css';
import Button from './sprk/components/button/index.js';
import InputContainer from './sprk/components/inputcontainer/index.js';
import TextInput from './sprk/components/textinput/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
              <li><Button type="primary">Primary Button</Button> </li>
              <li><Button type="secondary">Secondary Button</Button></li>
              <li><Button type="tertiary">Tertiary Button</Button></li>
              <li><Button type="primary" disabled={true}>Disabled Button</Button></li>
              <li><Button type="primary" spinner={true}>Spinner</Button></li>
              <li><Button type="primary" href="#">Link Button</Button></li>
              <li>
                  <InputContainer>
                      <TextInput label="Example Text" type="text" />
                  </InputContainer>
              </li>
          </ul>
      </div>
    );
  }
}

export default App;

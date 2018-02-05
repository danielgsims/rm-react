import React, { Component } from 'react';
import './assets/css/spark.css';
import Button from './sprk/components/button/index.js';
import InputContainer from './sprk/components/input/Container.js';
import TextInput from './sprk/components/input/TextInput.js'
import Checkbox from './sprk/components/input/CheckBox.js'
import TextArea from './sprk/components/input/TextArea.js'
import SelectBox from "./sprk/components/input/SelectBox";

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
              <li> <InputContainer> <Checkbox label="Example Checkbox"/> </InputContainer> </li>
              <li> <InputContainer> <TextInput label="Example Text Input"/> </InputContainer> </li>
              <li> <InputContainer> <TextInput disabled={true} label="Example Text Input"/> </InputContainer> </li>
               <li> <InputContainer> <TextArea label="Example Text Area"/> </InputContainer> </li>
              <li><SelectBox label="My Select Box" options={ {Foo: '123', Bar: '456' }}/></li>
          </ul>
      </div>
    );
  }
}

export default App;

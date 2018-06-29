import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Nav from './components/Nav/Nav.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm.js';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#fff",
        blur: 5
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onSubmit = (event) => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particleOptions}
        />
        <Nav />
        <Logo />
        <Rank />
        <ImgLinkForm 
          myInputChange={this.onInputChange}
          mySubmit={this.onSubmit}
        />
        {/*
        FaceRecImg /> */}
      </div>
    )
  }
}

export default App;

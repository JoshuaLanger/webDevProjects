import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import Logo from './components/Logo/Logo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Logo />
        {/*
        // <ImgLinkForm />
        // <FaceRecImg /> */}
      </div>
    )
  }
}

export default App;

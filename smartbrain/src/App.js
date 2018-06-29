import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Nav from './components/Nav/Nav.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm.js';
import FaceRecImg from './components/FaceRecImg/FaceRecImg.js';
import Clarifai from 'clarifai';
import './App.css';

const clarifaiApp = new Clarifai.App({
  apiKey: 'cd9b15c6541846ed8ef8d3cd276ace10'
});
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
      imgUrl: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }
  onSubmit = () => {
    console.log('click');
    this.setState({imgUrl: this.state.input});
    clarifaiApp.models
      .predict(Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          console.log('Oh no, brainfreeze!', err);
        }
      );
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
        <FaceRecImg 
          myImgUrl={this.state.imgUrl}
        />
      </div>
    )
  }
}

export default App;

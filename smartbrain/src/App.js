import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Nav from './components/Nav/Nav.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
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
      route: 'register',
      input: '',
      imgUrl: '',
      box: {},
    }
  }
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  calcFaceLoc = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log('clarifaiFace', clarifaiFace);
    const img = document.getElementById('faceImg');
    const width = Number(img.width);
    const height = Number(img.height);
    console.log('width', width, 'height', height);
    return {
      top: clarifaiFace.top_row * height,
      left: clarifaiFace.left_col * width,
      width: width * (clarifaiFace.right_col - clarifaiFace.left_col),
      height: height * (clarifaiFace.bottom_row - clarifaiFace.top_row),
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log('box parameters', box);
  }
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }
  onSubmit = () => {
    this.setState({imgUrl: this.state.input});
    clarifaiApp.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calcFaceLoc(response)))
      .catch(err => console.log('Oh no, brainfreeze!', err));
  }
  renderHome = () => {
    return (
      <div>
        <Rank />
        <ImgLinkForm 
          myInputChange={this.onInputChange}
          mySubmit={this.onSubmit}
        />
        <FaceRecImg 
          myBox={this.state.box}
          myImgUrl={this.state.imgUrl}
        />
      </div>
    )
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
        { this.state.route === 'home'
          ? this.renderHome()
          : ( this.state.route === 'signin'
              ? <SignIn 
                  myRouteChange={this.onRouteChange('home')}
                />
              : <Register
                  myRouteChange={this.onRouteChange('home')}
                />   
            )
        }      
      </div>
    )
  }
}

export default App;

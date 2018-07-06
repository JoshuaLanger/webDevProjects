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
      value: 100,
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
      isSignedIn: false,
      route: 'signin',
      input: '',
      imgUrl: '',
      box: {},
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
  loadUser = data => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }
  });
  }
  onRouteChange = (route) => {
    (route === 'signout')
    ? this.setState({isSignedIn: false})
    : this.setState({isSignedIn: true});
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
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}));
          })
        }
        this.displayFaceBox(this.calcFaceLoc(response));
      })
      .catch(err => console.log('Oh no, brainfreeze!', err));
  }
  renderHome = () => {
    return (
      <div>
        <Rank 
          name={this.state.user.name}
          entries={this.state.user.entries}
        />
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
        <Nav 
          myRouteChange={this.onRouteChange}
          isSignedIn={this.isSignedIn}
        />
        <Logo />
        { this.state.route === 'home'
          ? this.renderHome()
          : ( this.state.route === 'signin'
              ? <SignIn 
                  loadUser={this.loadUser}
                  myRouteChange={this.onRouteChange}
                />
              : <Register
                  loadUser={this.loadUser}
                  myRouteChange={this.onRouteChange}
                />   
            )
        }      
      </div>
    )
  }
}

export default App;

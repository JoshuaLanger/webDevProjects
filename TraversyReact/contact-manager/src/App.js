import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="BillyBob Jean"
          phone="123-123-1234"
          address="1600 pinness ave"
        />
        <Contact
          name="Karen Doe"
          phone="456-465-7456"
          address="1601 pinness ave"
        />
      </div>
    );
  }
}

export default App;

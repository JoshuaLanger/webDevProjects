import React, { Component } from "react";

import Header from "./components/Header";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contact
          name="BillyBob Jean"
          phone="764-234-9875"
          address="1600 pinness ave"
        />
        <Contact
          name="Karen Billy"
          phone="654-234-1234"
          address="1601 pinness ave"
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import PropTypes from 'prop-types'

class Contact extends Component {
  render() {
      const {name, phone, address} = this.props;

    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{phone}</li>
          <li>{address}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
}

export default Contact;

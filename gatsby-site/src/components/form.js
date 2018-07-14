import React from 'react'

const Form = () => (
  <div>
    <label for="name">Name: </label>
    <input type="text" name="name" id="name" /><br />
    <label for="email">Email: </label> 
    <input type="email" name="email" id="email" /><br />
    <label for="pswd">Pswd: </label> 
    <input type="password" name="pswd" id="pswd" /><br />
  </div>
)

export default Form
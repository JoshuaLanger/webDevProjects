import React from 'react'
import Link from 'gatsby-link'
import Form from './src/components/form.js'

const ThirdPage = () => (
  <div>
    <h1>Hi from the third page</h1>
    <p>Here's a form:</p>
    <Form />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ThirdPage

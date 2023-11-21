import React from 'react'

import { Helmet } from 'react-helmet'

import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-Us - Flexibl</title>
        <meta property="og:title" content="Contact-Us - Flexibl" />
      </Helmet>
    </div>
  )
}

export default ContactUs

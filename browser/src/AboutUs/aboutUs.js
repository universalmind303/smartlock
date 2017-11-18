import React from 'react'

// Renders details about the company
const AboutUs = ({history: {goBack}}) => (
  <div className='container'>
    <p className='h1'>CasaIQ -
      A Smart Home Solution Custom-built for Apartments, Condos, and Multifamily Real Estate.
    </p>
    <button className='btn btn-warning' onClick={goBack}>back to your device</button>
  </div>
)

export default AboutUs

import React from 'react'

import BackButton from './images/arrow.png'

import './styles.scss'
<<<<<<< 99435eea829ee746207e9389a84c3317c16487ba
=======


>>>>>>> airbnb merge conflict resolved
// Renders details about the company
function AboutUs({ history: { goBack } }) {
  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="col-md-10 col-sm-12 col-xs-12 text-left h1">CasaIQ- </div>
        <div className="col-md-2 col-sm-12 col-xs-12  text-right">
          <img alt=" " src={BackButton} onClick={goBack} />
        </div>
      </div>
      <div> A Smart Home Solution Custom-built for Apartments, Condos, and Multifamily Real Estate.
      </div>
    </div>
  )
}


export default AboutUs

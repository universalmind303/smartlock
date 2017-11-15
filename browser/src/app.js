import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Device from './Device/index'


const App = () => (
  <Router>
    <div className='container'>
      <div className='app'>
        <Link to='/aboutUs'>About</Link>
        <Route path='/aboutUs' component={About}/>
        <Link to='/device/apt-120'>apt-120</Link>
        <Route path='/device/' component={Device}/>
        APP
      </div>
    </div>
  </Router>
)


function About() {
  return (
    <a>ABOUT</a>
  )
}
export default App

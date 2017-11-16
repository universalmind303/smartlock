import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'

import AboutUs from './AboutUs'
import Device from './Device'

const path = require('path')

const ROOT = path.resolve(__dirname, './')
console.log(ROOT)
const App = () => (
  <Router history={browserHistory}>
    <div className='container'>
      <div className='app'>
        <Link to='/aboutUs'>About</Link>
        <Route path='/aboutUs' component={AboutUs}/>
        <Link to='/device/apt-120'>apt-120</Link>
        <Link to='/device/apt-300'>apt-300</Link>
        <Route path='/device/:device_name' component={Device}/>
        APP
      </div>
    </div>
  </Router>
)

export default App

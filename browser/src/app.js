import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import AboutUs from './AboutUs'
import Device from './Device'

const App = () => (
  <Router >
    <div>
      <Route path="/about_us" component={AboutUs} />
      <Route path="/device/:device_name" component={Device} />
    </div>
  </Router>
)

export default App

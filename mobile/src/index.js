import React from 'react'
import {
  View,
  Text,
} from 'react-native'

import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native'

import AboutUs from './AboutUs'
import Device from './Device'

const App = () => (
  <View style={{paddingTop: 20}}>
    <NativeRouter >
      <View>
        <View>
          <Link to='/device/apt-143-lock'>
            <Text>Demo</Text>
          </Link>
        </View>
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/device/:device_name' component={Device} />
      </View>
    </NativeRouter>
  </View>
)

export default App

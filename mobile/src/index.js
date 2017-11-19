import React from 'react'
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native'

import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native'

import AboutUs from './AboutUs'
import Device from './Device'

const {height} = Dimensions.get('window')

/*
 Main entrypoint for app.
 */
const App = () => (
  <View style={styles.container}>
    <NativeRouter >
      <View>
        <Route exact path='/' component={() => (
          <View style={styles.demo}>
            <Link to='/device/apt-143-lock'>
              <Text style={styles.demoText}>Start Demo</Text>
            </Link>
          </View>
        )} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/device/:device_name' component={Device} />
      </View>
    </NativeRouter>
  </View>
)




////////////
// STYLES //
////////////



const styles = StyleSheet.create ({
  container: {
    marginTop: 25,
  },
  demo: {
    alignSelf: 'center',
    paddingTop: height * 0.5
  },
  demoText: {
    fontSize: 27,
  }

})
export default App

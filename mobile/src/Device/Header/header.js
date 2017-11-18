import React from 'react'
import { Link } from 'react-router-native'

import {
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native'

const {height} = Dimensions.get('window')

// returns a header with normalized title
function Header({title}) {

  // normalize the title
  // \b - word boundary
  // [a-z] alphabetic capture group
  // g  - all matches
  const normalizedTitle = title.replace(/\b[a-z]/g, x => x.toUpperCase()).replace(/-/g, ' ')

  return (
    <View style={styles.header}>
      <Text>{normalizedTitle}</Text>
      <Link to='/aboutUs'><Text>About</Text></Link>
    </View>
  )
}



const styles = StyleSheet.create ({
  header : {
    paddingTop: height * 0.05,
    backgroundColor: '#1de9b6',
    height: height * 0.15
  }
})

export default Header

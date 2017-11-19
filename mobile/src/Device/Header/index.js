import React from 'react'
import { Link } from 'react-router-native'
import {
  Text,
  View,
} from 'react-native'

import styles from './styles'

function Header({ title }) {
  // normalize the title
  // \b - word boundary
  // [a-z] alphabetic capture group
  // g  - all matches
  const normalizedTitle = title.replace(/\b[a-z]/g, x => x.toUpperCase()).replace(/-/g, ' ')

  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Text style={styles.title}>{normalizedTitle}</Text>
        <Link style={styles.link} to="/aboutUs">
          <Text>About</Text>
        </Link>
      </View>
    </View>
  )
}
export default Header

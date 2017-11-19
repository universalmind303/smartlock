import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

// Renders details about the company
function AboutUs({history: {goBack}}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.title}>Casa IQ- </Text>
          <TouchableOpacity style={styles.link} onPress={goBack}>
            <Image source={require('./images/arrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text>
        A Smart Home Solution Custom-built for Apartments, Condos, and Multifamily Real Estate.
      </Text>
    </View>
  )
}
export default AboutUs

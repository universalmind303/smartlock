import React from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const {height} = Dimensions.get('window')

// Renders details about the company
function AboutUs({history: {goBack}}) {
  return (
    <View style={styles.header}>
      <Text>CasaIQ- </Text>
      <View className='row header'>
        <TouchableOpacity onPress={goBack}>
          <Text >back to your device</Text>
        </TouchableOpacity>
      </View>
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

export default AboutUs

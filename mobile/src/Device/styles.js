import {StyleSheet, Dimensions} from 'react-native'

const {height} = Dimensions.get('window')

export default StyleSheet.create({
  topBuffer: {
    marginTop: height * 0.10
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

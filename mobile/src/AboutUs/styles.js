import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  header: {
    paddingLeft: 10,
    backgroundColor: '#1de9b6',
    height: height * 0.10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    width: width * 0.7
  },
  link: {
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: width * 0.3
  }
})

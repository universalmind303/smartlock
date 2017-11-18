import React from 'react'

import {
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Header from './Header'


const { height } = Dimensions.get('window')

// Main logic for devices
function Device({
  device: {
    isNotStarted,
    isLoading,
    device,
    error
  },
  getDeviceDataWithDispatch,
  updateLockStateWithDispatch,
  match: {
    params: {
      device_name
    }
  }
}) {
  if(isNotStarted){
    getDeviceDataWithDispatch(device_name)
    return <ActivityIndicator />

  }

  if(isLoading){
    return <ActivityIndicator />
  }

  if(error){
    console.log(error)
    return (
      <View>
        {/* <Header title={'CasaIQ-'} /> */}
        <Text>
          Internal Error, please reload page
        </Text>
      </View>
    )
  }

  if(!device || device.type !== 'lock') {
    return (
      <Header title={'not supported yet'} />
    )
  }

  return (
    <View>
      <Header title={device_name} />
      <View style={styles.topBuffer}>
        <View><Text>
          {device.state.toUpperCase()}
        </Text></View>
        <TouchableOpacity
          onPress={() => updateLockStateWithDispatch(device_name)}>
          <Image source={device.state === 'locked'
            ? require('./images/locked.png')
            : require('./images/unlocked.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topBuffer: {
    marginTop: height * 0.10
  }
})

export default Device

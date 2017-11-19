import React from 'react'

import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Header from './Header'
import styles from './styles'

const lock = require('./images/locked.png')
const unlock = require('./images/unlocked.png')
/*
  Main logic for Devices
 */
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
  if (isNotStarted) {
    getDeviceDataWithDispatch(device_name)
    return <ActivityIndicator />
  }
  if (isLoading) {
    return <ActivityIndicator />
  }
  if (error) {
    return (
      <View>
        <Text>
          Internal Error, please reload page
        </Text>
      </View>
    )
  }
  if (!device || device.type !== 'lock') {
    return (
      <View>
        <Header title="not supported yet" />
        <Text>We are not supporting this device at the moment</Text>
      </View>
    )
  }

  return (
    <View>
      <Header title={device_name} />
      <View style={styles.topBuffer}>
        <View style={styles.body}>
          <Text>
            {device.state.toUpperCase()}
          </Text>
          <TouchableOpacity onPress={() => updateLockStateWithDispatch(device_name)}>
            <Image source={device.state === 'locked' ? lock : unlock} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default Device

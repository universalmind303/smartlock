import React from 'react'
import {
  Link,
} from 'react-router-dom'

import Header from './components/header'
import Lock from '../../../assets/icons/locked.png'
import Unlock from '../../../assets/icons/unlocked.png'

function Device({
  device: {
    isNotStarted,
    isLoading,
    device
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
    return (<div>Loading</div>)
  }
  if(isLoading){
    return (<div>Loading</div>)
  }
  if(!device || device.type !== 'lock') {
    return (
      <div>NOT SUPPORTED YET </div>
    )
  }

  return (
    <div>
      <Header title={device_name} />
      <Link to='/about_us'>About</Link>
      <button
        className='btn btn-transparent'
        onClick={() => updateLockStateWithDispatch(device_name)}>
        <img src={device.state === 'locked' ? Lock : Unlock} />
      </button>
    </div>
  )
}

export default Device

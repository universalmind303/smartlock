import React from 'react'


import Header from './Header'

import Lock from '../../../assets/icons/locked.png'
import Unlock from '../../../assets/icons/unlocked.png'


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
    return (<div>Loading</div>)
  }

  if(isLoading){
    return (<div>Loading</div>)
  }

  if(error){
    return (
      <div>
        <Header title={'CasaIQ-'} />
        <div className='buffer-top text-center'>
          Internal Error, please reload page
        </div>
      </div>
    )
  }

  if(!device || device.type !== 'lock') {
    return (
      <Header title={'not supported yet'} />
    )
  }

  return (
    <div className='container-fluid'>
      <Header title={device_name} />
      <div className='text-center buffer-top'>
        <div><p>
          {device.state.toUpperCase()}
        </p></div>
        <button
          className='btn btn-transparent'
          onClick={() => updateLockStateWithDispatch(device_name)}>
          <img src={device.state === 'locked' ? Lock : Unlock} />
        </button>
      </div>
    </div>
  )
}

export default Device

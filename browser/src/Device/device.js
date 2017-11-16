import React from 'react'

function Device({
  device: {
    isNotStarted,
    isLoading,
    devices
  },
  getDeviceDataWithDispatch,
  match
}) {
  console.log(match)
  if(isNotStarted){
    getDeviceDataWithDispatch()
    return (<div>Loading</div>)
  }
  if(isLoading){
    return (<div>Loading</div>)
  }

  console.log(devices)
  return (
    <div>Device</div>
  )
}

export default Device

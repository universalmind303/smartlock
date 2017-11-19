import fetchData from './api'

/**
 * [getDeviceData main logic regarding api request for device data]
 * @param  {Function} dispatch  [redux.dispatch]
 * @param  {String} deviceName  [string of device name]
 * @return {Function}           [async() => dispatch(dataSuccess) || dispatch(dataFailure)]
 */
export function getDeviceData(dispatch, deviceName) {
  /*
   * Action creators for start, successful, and bad requests
   */
  const dataRequest = () => ({
    type: 'DEVICE_REQUEST'
  })

  const dataFailure = error => ({
    type: 'DEVICE_FETCH_ERROR',
    error
  })

  const dataSuccess = actions => ({
    type: 'DEVICE_FETCH_DATA_SUCCESS',
    ...actions
  })

  if (!deviceName || typeof deviceName !== 'string') {
    return dispatch(dataFailure(new Error('invalid deviceName in getDeviceData')))
  }
  // Notify redux that the request was started
  dispatch(dataRequest())

  // return either success or error
  return async () => {
    try {
      const updatedAt = Date.now()
      const payload = await fetchData(deviceName)
      if (payload.data) {
        return dispatch(dataSuccess({
          data: payload.data,
          updatedAt,
          deviceName
        }))
      }
      throw new Error(payload)
    } catch (error) {
      return dispatch(dataFailure(error))
    }
  }
}


/**
 * [updateLockState description]
 * @param  {String} deviceName [name of device]
 * @return {Object}             [action creator for redux store]
 */
export function updateLockState(deviceName) {
  const updatedAt = Date.now()
  return {
    type: 'UPDATE_LOCK_STATE',
    deviceName,
    updatedAt,
  }
}

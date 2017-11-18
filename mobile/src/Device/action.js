import { fetchData } from './api'


export function getDeviceData(dispatch, device_name) {

  if(!device_name || typeof device_name !== 'string') {
    return dispatch(dataFailure(new Error('invalid device_name in getDeviceData')))
  }

  dispatch(dataRequest())

  return async function () {
    try {
      const updatedAt = Date.now()
      const payload = await fetchData(device_name)
      if(payload.data) {
        return  dispatch(dataSuccess({
          data: payload.data,
          updatedAt: updatedAt,
          deviceName: device_name
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
 * @param  {String} device_name [name of device]
 * @return {Object}             [action creator for redux store]
 */
export function updateLockState(device_name) {
  const updatedAt = Date.now()
  return {
    type: 'UPDATE_LOCK_STATE',
    deviceName: device_name,
    updatedAt: updatedAt,
  }
}




/**
* [Tells redux store that an API request was started]
* @return {Object}        [action creator for redux store]
*/
function dataRequest() {
  return {
    type: 'DEVICE_REQUEST'
  }
}

/**
* [API Request Fail]
* @param  {Error} error   [error message from API]
* @return {Object}        [action creator for redux store]
*/
function dataFailure(error) {
  return {
    type: 'DEVICE_FETCH_ERROR',
    error: error
  }
}

/**
* [API Request Success]
* @param  {Object} actions   [data object from API]
* @return {Object}           [action creator for redux store]
*/
function dataSuccess(actions) {
  return {
    type: 'DEVICE_FETCH_DATA_SUCCESS',
    ...actions
  }
}

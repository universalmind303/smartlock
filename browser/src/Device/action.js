import { fetchData } from './api'


export function getDeviceData(dispatch, device_name) {

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
    } catch (error) {
      return dispatch(dataFailure(error))
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

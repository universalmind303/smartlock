import { fetchData } from './api'

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
function dataFailure(error, ) {
  return {
    type: 'DEVICE_FETCH_ERROR',
    error: error
  }
}

/**
 * [API Request Success]
 * @param  {Object} actions   [data object from API]
 * @return {Object}        [action creator for redux store]
 */
function dataSuccess(actions) {
  return {
    type: 'DEVICE_FETCH_DATA_SUCCESS',
    ...actions
  }
}

export function getDeviceData(dispatch) {

  const updatedAt = Date.now()
  dispatch(dataRequest())

  return async function () {
    try {
      const payload = await fetchData()
      if(payload.data) {
        return  dispatch(dataSuccess({
          data: payload.data,
          updatedAt: updatedAt,
          deviceName: payload.data.slug
        }))
      }
    } catch (error) {
      console.error(error)
      return dispatch(dataFailure(error))
    }
  }
}

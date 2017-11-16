export default DeviceReducer


const initialState = {
  devices        : {},
  isLoading   : true,
  isNotStarted: true,
}

/*
* Reducer for Grid Photos
*/
function DeviceReducer(state=initialState, action) {
  console.log('action', action)
  console.log('state.devices', state.devices[action.deviceName])

  if(action.data && action.data.slug) {
    console.log('action.deviceName', action.deviceName)

  }
  const handlers = {
    'DEVICE_REQUEST': () => ({
      ...state,
      isLoading: true,
      isNotStarted: false,
    }),
    'DEVICE_FETCH_DATA_SUCCESS': () => ({

      ...state,
      devices: {
        ...state.devices,
        [action.deviceName]: {
          ...action.data,
          history: [
            // ...state.devices[action.deviceName].history,
            {
              state: action.data.state,
              last_updated_at: action.updatedAt
            }
          ]
        }
      },
      isLoading:false,
    }),
    'DEVICE_FETCH_ERROR': () => ({
      ...state,
      error: action.error,
      isLoading:false,
    }),
  }

  return action && handlers[action.type] ? handlers[action.type]() : state
}

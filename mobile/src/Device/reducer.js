

const initialState = {
  device: {},
  isLoading: true,
  isNotStarted: true,
}


/*
* Reducer for Device
*/
export default function DeviceReducer(state=initialState, action) {
  const handlers = {

    'UPDATE_LOCK_STATE': () => {
      const deviceState = state.device.state === 'locked' ? 'unlocked' : 'locked'
      const history = [...state.device.history]

      // if history is too long, remove oldest entry
      if(history.length >= 10) {
        history.shift()
      }

      return {
        ...state,
        device: {
          ...state.device,
          history: [
            ...history,
            {
              last_updated_at: action.updatedAt,
              state: deviceState,
            }
          ],
          state: deviceState,
          last_updated_at: action.updatedAt,
        }
      }
    },

    'DEVICE_REQUEST': () => ({
      ...state,
      isLoading: true,
      isNotStarted: false,
    }),

    'DEVICE_FETCH_DATA_SUCCESS': () => ({
      ...state,
      device: {
        ...state.device,
        ...action.data,
        history: [{
          last_updated_at: action.updatedAt,
          state: action.data.state,
        }],
        deviceName: action.deviceName,
      },
      isLoading:false,
      isNotStarted: false,
    }),

    'DEVICE_FETCH_ERROR': () => ({
      ...state,
      error: action.error,
      isLoading:false,
      isNotStarted: false,
    }),
  }

  return action && handlers[action.type] ? handlers[action.type]() : state
}

export default DeviceReducer


const initialState = {
  data        : {},
  isLoading   : true,
  isNotStarted: true,
}

/*
* Reducer for Grid Photos
*/
function DeviceReducer(state=initialState, action) {
  const handlers = {
  }

  return action && handlers[action.type] ? handlers[action.type]() : state
}

import { combineReducers } from 'redux'

import DeviceReducer from './Device/reducer'

export default combineReducers({
  device: DeviceReducer,
})

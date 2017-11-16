import { combineReducers } from 'redux'

import DeviceReducer  from './Device/reducer'

console.log(DeviceReducer)
export default combineReducers({
  device : DeviceReducer,
})

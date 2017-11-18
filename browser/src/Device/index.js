import Device from './device'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import { getDeviceData, updateLockState } from './action'

import './device.scss'

const mapState = ({device}, {match}) => ({
  device,
  match,
})

const mapDispatch = (dispatch) => ({
  getDeviceDataWithDispatch: device_name => dispatch(getDeviceData(dispatch, device_name)),
  updateLockStateWithDispatch: device_name => dispatch(updateLockState(device_name)),
})

export default withRouter(connect(mapState,mapDispatch)(Device))

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getDeviceData, updateLockState } from './action'

import Device from './device'

const mapState = ({ device }, { match }) => ({
  device,
  match,
})

const mapDispatch = dispatch => ({
  getDeviceDataWithDispatch: deviceName => dispatch(getDeviceData(dispatch, deviceName)),
  updateLockStateWithDispatch: deviceName => dispatch(updateLockState(deviceName)),
})

export default withRouter(connect(mapState, mapDispatch)(Device))

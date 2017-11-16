import Device from './device'
import { connect } from 'react-redux'

import { getDeviceData } from './action'

const mapState = ({device}, {match}) => ({
  device,
  match,
})

const mapDispatch = (dispatch) => ({
  getDeviceDataWithDispatch: () => dispatch(getDeviceData(dispatch))
})

export default connect(mapState,mapDispatch)(Device)

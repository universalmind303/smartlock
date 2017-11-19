import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './action'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
describe('#getDeviceData', () => {
  beforeEach(function () {
    jest.resetModules()
  })

  it('should handle a good request gracefully', async () => {
    const store = mockStore({})
    const actionResponse = await store.dispatch(actions.getDeviceData(store.dispatch, 'apt-1-lock'))
    expect(actionResponse.type).toEqual('DEVICE_FETCH_DATA_SUCCESS')
  })

  it('should handle a bad request gracefully', async () => {
    const store = mockStore({})
    const actionResponse = await store.dispatch(actions.getDeviceData(store.dispatch,null))
    expect(actionResponse.type).toEqual('DEVICE_FETCH_ERROR')
  })
})

describe('#updateLockState', () => {

  it('should dispatch an action creator for redux', async() => {
    const store = mockStore({})
    const actionResponse = await store.dispatch(actions.updateLockState('apt-1-test'))
    expect(actionResponse.type).toEqual('UPDATE_LOCK_STATE')
    expect(actionResponse.deviceName).toEqual('apt-1-test')
  })

})

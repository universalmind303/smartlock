import DeviceReducer from './reducer'

const deviceSuccess = {
  type: 'DEVICE_FETCH_DATA_SUCCESS',
  data:  JSON.parse(`{
      "type": "lock",
      "state": "locked",
      "last_updated_at": 1508386138,
      "slug": "apt-143-lock"
    }`),
  updatedAt: 10001231,
  deviceName: 'apt-mock-1'
}
const deviceFailure = {
  type: 'DEVICE_FETCH_ERROR',
  error: new Error('mock error')
}


describe('#DeviceReducer',  () => {

  it('should return default state', () => {
    expect(DeviceReducer(undefined)).toEqual({
      'device': {},
      'isLoading': true,
      'isNotStarted': true
    })
  })

  it('should add data to device on successful fetch', () => {

    expect(DeviceReducer(undefined,deviceSuccess)).toHaveProperty('device.type')
    expect(DeviceReducer(undefined,deviceSuccess)).toHaveProperty('device.state')
    expect(DeviceReducer(undefined,deviceSuccess)).toHaveProperty('device.last_updated_at')
    expect(DeviceReducer(undefined,deviceSuccess)).toHaveProperty('device.slug')
    expect(DeviceReducer(undefined,deviceSuccess)).toHaveProperty('device.history')
    expect(DeviceReducer(undefined,deviceSuccess)).toHaveProperty('device.deviceName')
  })

  it('should change isNotStarted to false on DEVICE_REQUEST',() => {

    expect(DeviceReducer(undefined, {
      type: 'DEVICE_REQUEST'
    }).isNotStarted).toEqual(false)
  })

  it('should change isLoading to true on DEVICE_REQUEST',() => {

    expect(DeviceReducer(undefined, {
      type: 'DEVICE_REQUEST'
    }).isLoading).toEqual(true)
  })

  it('should change isLoading to true on failure or success',() => {

    expect(DeviceReducer(undefined, deviceSuccess).isLoading).toEqual(false)
    expect(DeviceReducer(undefined, deviceFailure).isLoading).toEqual(false)
  })

  it('should add an error message on failed fetch', () => {

    expect(DeviceReducer(undefined,deviceFailure)).toHaveProperty('error')
  })

  describe('#LockState',() => {
    let mockState
    beforeEach(() => {
      mockState =  DeviceReducer(undefined,deviceSuccess)
    })

    it('should toggle device.state when called', () => {

      expect(DeviceReducer(mockState,{
        type: 'UPDATE_LOCK_STATE',
      }).device.state).toEqual('unlocked')

      expect(DeviceReducer(
        DeviceReducer(mockState,{
          type: 'UPDATE_LOCK_STATE',
        }),{
          type: 'UPDATE_LOCK_STATE',
        }).device.state).toEqual('locked')
    })

    it('should append to device.history when called', () => {

      expect(DeviceReducer(mockState,{
        type: 'UPDATE_LOCK_STATE',
      }).device.history).toHaveLength(2)
    })

    it('should never have a device.history longer than 10', () => {

      [...Array(100)].forEach(x => {
        mockState = DeviceReducer(mockState,{
          type: 'UPDATE_LOCK_STATE',
        })
      })
      expect(mockState.device.history).toHaveLength(10)
    })

  })

})

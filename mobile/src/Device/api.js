// import axios from 'axios'
// normally we would use something like axios.get, but since there is no api, just send back a promise object

/**
* [getData gets device data from api]
* @return {Object} [data object from server]
*/

export async function fetchData (device_name) {

  // typical api call would be
  // const payload = await axios.get(`/api/devices/:${device_name}`)
  const payload = {}
  payload.data = await JSON.parse(`{
    "type": "lock",
    "state": "locked",
    "last_updated_at": 1508386138,
    "slug": "apt-143-lock"
  }`)
  return payload
}

// import axios from 'axios'
// normally we would use something like axios.get, but since there is no api, the

/**
* [getData gets device data from api]
* @type {[type]}
* @return {Object} [data object from server]
*/

export async function fetchData () {
  const payload = {}
  payload.data = await JSON.parse(`{
    "type": "lock",
    "state": "locked",
    "last_updated_at": 1508386138,
    "slug": "apt-143-lock"
  }`)
  return payload
}

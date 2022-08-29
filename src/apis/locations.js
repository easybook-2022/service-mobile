import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/locations/`

export const getLogins = data => { // for restaurants only
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}/get_logins/${locationid}`,
    { cancelToken }
  )
}

export const getDayHours = data => {
  return axios.post(
    `${beginUrl}get_day_hours`,
    data
  )
}

export const getLocationHours = data => {
  const { locationid, cancelToken } = data

	return axios.get(
    `${beginUrl}get_location_hours/${locationid}`,
    { cancelToken }
  )
}

export const getAllLocations = data => {
  const { ownerid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_all_locations/${ownerid}`,
    { cancelToken }
  )
}

export const getLocationProfile = data => {
	return axios.post(
    `${url}/locations/get_location_profile`,
    data
  )
}

import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/owners/`

export const loginUser = data => {
	return axios.post(
		`${beginUrl}owner_login`,
		data
	)
}

export const logoutUser = data => {
  const { ownerid, cancelToken } = data

  return axios.get(
    `${beginUrl}owner_logout/${ownerid}`,
    { cancelToken }
  )
}

export const getAllStylists = data => {
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_all_stylists/${locationid}`,
    { cancelToken }
  )
}

export const getAllWorkingStylists = data => {
  return axios.post(
    `${beginUrl}get_all_working_stylists`,
    data
  )
}

export const getStylistInfo = data => {
  const { workerid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_stylist_info/${workerid}`,
    { cancelToken }
  )
}

export const getAllWorkersTime = data => {
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_all_workers_time/${locationid}`,
    { cancelToken }
  )
}

export const getWorkersHour = data => {
  return axios.post(
    `${beginUrl}get_workers_hour`,
    data
  )
}

export const getOtherWorkers = data => {
  return axios.post(
    `${beginUrl}get_other_workers`,
    data
  )
}

export const getWorkersTime = data => {
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_workers_time/${locationid}`,
    { cancelToken }
  )
}

export const updateNotificationToken = data => {
	return axios.post(
		`${beginUrl}update_owner_notification_token`,
		data
	)
}

export const getAccounts = data => {
  const { locationid, cancelToken } = data

	return axios.get(
    `${beginUrl}get_accounts/${locationid}`,
    { cancelToken }
  )
}

export const resetPassword = data => {
	return axios.post(
		`${beginUrl}reset_password`,
		data
	)
}

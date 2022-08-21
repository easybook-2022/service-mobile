import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/carts/`

export const getCartOrderers = id => {
  return axios.get(`${beginUrl}get_cart_orderers/${id}`)
}

export const orderDone = data => {
	return axios.post(
		`${beginUrl}order_done`,
		data
	)
}

export const setWaitTime = data => {
  return axios.post(
    `${beginUrl}set_wait_time`,
    data
  )
}

export const getOrders = data => {
  return axios.post(
    `${beginUrl}get_orders`,
    data
  )
}

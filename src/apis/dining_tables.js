import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/dining_tables/`

export const getTables = data => {
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_tables/${locationid}`,
    { cancelToken }
  )
}

export const getTableBills = data => {
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_table_bills/${locationid}`,
    { cancelToken }
  )
}

export const getOrderingTables = data => {
  const { locationid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_ordering_tables/${locationid}`,
    { cancelToken }
  )
}

export const getQrCode = data => {
  const { tableid, cancelToken } = data

  return axios.get(
    `${beginUrl}get_qr_code/${tableid}`,
    { cancelToken }
  )
}

export const orderMeal = data => {
  return axios.post(
    `${beginUrl}order_meal`,
    data
  )
}

export const viewTableOrders = data => {
  const { tableid, cancelToken } = data

  return axios.get(
    `${beginUrl}view_table_orders/${tableid}`,
    { cancelToken }
  )
}

export const finishOrder = data => {
  return axios.post(
    `${beginUrl}finish_order`,
    data
  )
}

export const viewPayment = data => {
  const { tableid, cancelToken } = data

  return axios.get(
    `${beginUrl}view_payment/${tableid}`,
    { cancelToken }
  )
}

export const finishDining = data => {
  return axios.post(
    `${beginUrl}finish_dining`,
    data
  )
}

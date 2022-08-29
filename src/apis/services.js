import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/services/`

export const getServiceInfo = data => {
  const { serviceid, cancelToken } = data

	return axios.get(
    `${beginUrl}get_service_info/${serviceid}`,
    { cancelToken }
  )
}

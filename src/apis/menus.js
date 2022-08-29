import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/menus/`

export const getMenus = data => {
  const { locationid, cancelToken } = data

	return axios.get(
    `${beginUrl}get_menus/${locationid}`,
    { cancelToken }
  )
}

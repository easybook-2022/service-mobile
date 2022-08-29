import axios from 'axios'
import { url } from '../../assets/info'

const beginUrl = `${url}/products/`

export const getProductInfo = data => {
  const { productid, cancelToken } = data

	return axios.get(
    `${beginUrl}get_product_info/${productid}`,
    { cancelToken }
  )
}

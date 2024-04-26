import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config."

class YGReqeust {
  constructor(baseURL, timeout) {
    this.instants = axios.create({
      baseURL,
      timeout,
    })
    this.instants.interceptors.response.use(res => {
      return res.data
    })
  }

  request(config) {
    return this.instants.request(config)
  }
  get(config) {
    return this.request({
      ...config,
      method: "get",
    })
  }
  post(config) {
    return this.request({
      ...config,
      method: "post",
    })
  }
}

const ygReqeust = new YGReqeust(BASE_URL, TIMEOUT)
export default ygReqeust

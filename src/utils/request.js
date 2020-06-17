import axios from 'axios'

axios.defaults.baseURL = '/api'
//请求拦截器
 axios.interceptors.request.use(
   config => {
    //  console.log(config)
      return config
   }
 )
//响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
import axios from 'axios'

const http = axios.create({
  timeout: 3000,
  baseURL: 'https://jsonplaceholder.typicode.com'
})

http.interceptors.request.use(
  (config) => {
    console.log('[HTTP REQUEST]', config)
    return config
  },
  (error) => {
    console.log('[HTTP REQUEST - Error]', error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    console.log('[HTTP RESPONSE]', response)
    return response
  },
  (error) => {
    console.log('[HTTP RESPONSE - Error]', error)
    return Promise.reject(error)
  }
)

export default http

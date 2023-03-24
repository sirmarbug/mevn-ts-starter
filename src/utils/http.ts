import axios, { AxiosError } from 'axios'
import { useCommonStore } from '@/stores/common'
import i18n from '@/locales'
import router from '@/router'

const http = axios.create({
  timeout: 3000,
  baseURL: import.meta.env.VITE_API_URL
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
  async (error) => {
    console.log('[HTTP RESPONSE - Error]', error)
    const status = error.response.status
    if (status === 500) {
      await router.push({ name: 'ServerError' })
    } else if (status === 404) {
      await router.push({ name: 'NotFound' })
    } else if (status === 403) {
      await router.push({ name: 'Forbidden' })
    } else if (status === 401) {
      await router.push({ name: 'Login' })
    } else if (status === 400) {
      const commonStore = useCommonStore()
      const { displaySnackbar } = commonStore
      if (error instanceof AxiosError) {
        const notification = error.response?.data?.code || 'error.global'
        displaySnackbar({
          text: i18n.global.t(notification),
          color: 'error'
        })
      } else {
        await router.push({ name: 'ServerError' })
      }
    }
    return Promise.reject(error)
  }
)

export default http

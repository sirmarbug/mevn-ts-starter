import axios, { AxiosError } from 'axios'
import { useCommonStore } from '@/stores/common'
import i18n from '@/locales'
import router from '@/router'
import { error, info } from '@/utils/logger'

const http = axios.create({
  timeout: 3000,
  baseURL: import.meta.env.VITE_API_URL
})

http.interceptors.request.use(
  (config) => {
    info('[HTTP REQUEST]', config)
    return config
  },
  (e) => {
    error('[HTTP REQUEST - Error]', e)
    return Promise.reject(e)
  }
)

http.interceptors.response.use(
  (response) => {
    info('[HTTP RESPONSE]', response)
    return response
  },
  async (e) => {
    error('[HTTP RESPONSE - Error]', e)
    const status = e.response.status
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
      if (e instanceof AxiosError) {
        const notification = e.response?.data?.code || 'error.global'
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

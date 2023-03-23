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
    }
    return Promise.reject(error)
  }
)

const errorHandle = (e: unknown) => {
  const commonStore = useCommonStore()
  const { displaySnackbar } = commonStore
  if (e instanceof AxiosError) {
    displaySnackbar({
      text: i18n.global.t(e.response?.data.code),
      color: 'error'
    })
  } else {
    displaySnackbar({
      text: i18n.global.t('error.global'),
      color: 'error'
    })
  }
}

export const get = async (url: string, config?: any) => {
  let result: any = {}
  try {
    const { data } = await http.get(url, config)
    result = data
    return result
  } catch (e) {
    errorHandle(e)
    return result
  }
}

export default http

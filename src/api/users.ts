import { http } from '@/utils'

export const fetchUsers = () => {
  return http.get('users')
}

export const addUser = (data: any) => {
  return http.post('users', data)
}

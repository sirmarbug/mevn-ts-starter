import { http } from '@/utils'

export const fetchUsers = () => {
  return http.get('users')
}

export const fetchUserDetails = (id: string | string[]) => {
  return http.get(`users/${id}`)
}

export const addUser = (data: any) => {
  return http.post('users', data)
}

export const updateUser = (data: any, id: string | string[]) => {
  return http.put(`users/${id}`, data)
}

export const removeUser = (id: string | string[]) => {
  return http.delete(`users/${id}`)
}

import { http } from '@/utils'
import type { HttpResponse, UserDTO, UserForm } from '@/types'
import type { AxiosResponse } from 'axios'

export const fetchUsers = async (): HttpResponse<UserDTO[]> => {
  return await http.get('users')
}

export const fetchUserDetails = (id: string | string[]): HttpResponse<UserDTO> => {
  return http.get(`users/${id}`)
}

export const addUser = (data: UserForm): HttpResponse<UserDTO> => {
  return http.post('users', data)
}

export const updateUser = (data: UserForm, id: string | string[]): HttpResponse<UserDTO> => {
  return http.put(`users/${id}`, data)
}

export const removeUser = (id: string | string[]): HttpResponse<UserDTO> => {
  return http.delete(`users/${id}`)
}

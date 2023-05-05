import { http } from '@/utils'
import type {
  HttpResponse,
  LoginForm,
  LoginResponse,
  RegisterForm,
  UserDTO,
  UserForm
} from '@/types'
import type { AxiosResponse } from 'axios'

export const login = async (user: LoginForm): HttpResponse<LoginResponse> => {
  return await http.post('auth/login', user)
}

export const register = (user: RegisterForm): HttpResponse<void> => {
  return http.post(`auth/register`, user)
}

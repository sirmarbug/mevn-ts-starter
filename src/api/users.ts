import { http } from '@/utils'

export const fetchUsers = () => {
  return http.get('users')
}

import { http } from '@/utils'

export const fetchPosts = () => {
  return http.get('todos')
}

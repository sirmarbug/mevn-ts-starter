import { http } from '@/utils'
import type { HttpResponse, Post, PostForm, ResponseArray } from '@/types'

export const fetchPosts = async (): HttpResponse<ResponseArray<Post>> => {
  return await http.get('posts')
}

export const fetchPostDetails = (id: string | string[]): HttpResponse<Post> => {
  return http.get(`posts/${id}`)
}

export const addPost = (data: PostForm): HttpResponse<Post> => {
  return http.post('posts', data)
}

export const updatePost = (data: PostForm, id: string | string[]): HttpResponse<Post> => {
  return http.put(`posts/${id}`, data)
}

export const removePost = (id: string | string[]): HttpResponse<Post> => {
  return http.delete(`posts/${id}`)
}

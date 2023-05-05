import { ref } from 'vue'
import { defineStore } from 'pinia'
import { error } from '@/utils/logger'
import type { Post, PostForm, PostFormPayload } from '@/types'
import { addPost, fetchPosts, removePost, updatePost } from '@/api/posts'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])
  const totalPost = ref<number>(0)

  const getAllPosts = async () => {
    try {
      const { data } = await fetchPosts()
      posts.value = data.items
      totalPost.value = data.total
    } catch (e) {
      error('fetchUsers', e)
    }
  }

  const add = async (payload: PostForm) => {
    const { data } = await addPost(payload)
    posts.value.push(data)
  }

  const update = async (payload: PostFormPayload) => {
    await updatePost(payload, payload._id)
  }

  const remove = async (id: string | string[]) => {
    await removePost(id)
    posts.value = posts.value.filter((u: Post) => u._id !== id)
  }

  return { posts, getAllPosts, add, update, remove }
})

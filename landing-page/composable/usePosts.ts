import {Post} from "~/types";

export const usePostsStore = defineStore('posts', () => {
  const selectedPost = ref<Post | null>(null)
  function setSelectedPost(id: number, title: string, body: string) {
    selectedPost.value = {
      id,
      title,
      body
    }
  }

  function resetSelectedPost() {
    selectedPost.value = null
  }

  return { selectedPost, setSelectedPost, resetSelectedPost }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchUsers } from '@/api'

export const useUsersStore = defineStore('users', () => {
  const users = ref<any>([])
  const getAllUser = async () => {
    const { data } = await fetchUsers()
    users.value = data
  }

  return { users, getAllUser }
})

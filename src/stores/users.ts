import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addUser, fetchUsers } from '@/api'

export const useUsersStore = defineStore('users', () => {
  const users = ref<any>([])
  const getAllUser = async () => {
    const { data } = await fetchUsers()
    users.value = data
  }

  const add = async (payload: any) => {
    const { data } = await addUser(payload)
    users.value.push(data)
  }

  return { users, getAllUser, add }
})

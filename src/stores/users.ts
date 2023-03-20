import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addUser, fetchUsers, updateUser } from '@/api'

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

  const update = async (payload: any) => {
    await updateUser(payload, payload.id)
  }

  return { users, getAllUser, add, update }
})

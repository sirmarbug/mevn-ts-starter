import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addUser, fetchUsers, removeUser, updateUser } from '@/api'
import { error } from '@/utils/logger'

export const useUsersStore = defineStore('users', () => {
  const users = ref<any>([])

  const getAllUser = async () => {
    try {
      const { data } = await fetchUsers()
      users.value = data
    } catch (e) {
      error('fetchUsers', e)
    }
  }

  const add = async (payload: any) => {
    const { data } = await addUser(payload)
    users.value.push(data)
  }

  const update = async (payload: any) => {
    await updateUser(payload, payload.id)
  }

  const remove = async (id: string | string[]) => {
    await removeUser(id)
    users.value = users.value.filter((u: any) => u.id !== id)
  }

  return { users, getAllUser, add, update, remove }
})

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Snackbar, SnackbarPayload } from '@/types'

export const useCommonStore = defineStore('common', () => {
  const snackbar = ref<Snackbar>({
    display: false,
    color: 'success',
    text: '',
    timeout: 5000
  })
  const displaySnackbar = (payload: SnackbarPayload) => {
    snackbar.value = {
      display: true,
      timeout: 5000,
      ...payload
    }
  }

  return { snackbar, displaySnackbar }
})

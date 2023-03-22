import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const snackbar = ref({
    display: false,
    color: 'success',
    text: 'Prrzykład',
    timeout: 5000
  })
  const displaySnackbar = (payload: any) => {
    snackbar.value = {
      display: true,
      timeout: 5000,
      ...payload
    }
  }

  return { snackbar, displaySnackbar }
})

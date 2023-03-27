import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import type { CounterLog } from '@/types'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const logs = ref<CounterLog[]>([])
  const decrement = () => {
    count.value--
    logs.value.push({
      date: dayjs().format('DD-MM-YYYY HH:mm'),
      type: 'Dekrement'
    })
  }

  const increment = () => {
    count.value++
    logs.value.push({
      date: dayjs().format('DD-MM-YYYY HH:mm'),
      type: 'Inkrement'
    })
  }

  const reset = () => {
    count.value = 0
    logs.value.push({
      date: dayjs().format('DD-MM-YYYY HH:mm'),
      type: 'Reset'
    })
  }

  return { count, logs, decrement, increment, reset }
})

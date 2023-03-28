import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import type { CounterLog } from '@/types'
import { useI18n } from 'vue-i18n'

export const useCounterStore = defineStore('counter', () => {
  const { t } = useI18n()
  const count = ref<number>(0)
  const logs = ref<CounterLog[]>([])
  const decrement = () => {
    count.value--
    logs.value.push({
      date: dayjs().format('DD-MM-YYYY HH:mm'),
      type: t('store.logs.decrement')
    })
  }

  const increment = () => {
    count.value++
    logs.value.push({
      date: dayjs().format('DD-MM-YYYY HH:mm'),
      type: t('store.logs.increment')
    })
  }

  const reset = () => {
    count.value = 0
    logs.value.push({
      date: dayjs().format('DD-MM-YYYY HH:mm'),
      type: t('store.logs.reset')
    })
  }

  return { count, logs, decrement, increment, reset }
})

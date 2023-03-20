import { defineStore } from 'pinia'
import { connectChat, disconnectChat, sendMessageChat } from '@/websockets'
import { ref } from 'vue'
import dayjs from 'dayjs'

export const useChatStore = defineStore('chat', () => {
  const isConnection = ref<boolean>()
  const messages = ref<any>([])

  const start = () => {
    console.log('start')
    connectChat()
    isConnection.value = true
  }

  const stop = () => {
    disconnectChat()
    isConnection.value = false
  }

  const sendMessage = (message: string) => {
    sendMessageChat(message)
  }

  const addMessage = (message: string) => {
    const newMessage = {
      date: dayjs().format('DD-MM-YYYY HH:mm:ss'),
      text: message
    }
    messages.value = [newMessage, ...messages.value]
  }

  return { isConnection, messages, start, stop, sendMessage, addMessage }
})

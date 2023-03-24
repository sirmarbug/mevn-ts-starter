<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { useChatStore } from '@/stores/chat'
import { storeToRefs } from 'pinia'

const chatStore = useChatStore()
const { isConnection } = storeToRefs(chatStore)
const { sendMessage } = chatStore

const message = ref('')

const sendMessageHandle = () => {
  sendMessage(message.value)
  message.value = ''
}
</script>

<template>
  <div class="chat-input w-100 d-flex">
    <v-text-field
      v-model="message"
      variant="outlined"
      label="Wyślij wiadomość"
      append-inner-icon="mdi-send"
      single-line
      hide-details
      :disabled="!isConnection"
      @click:append-inner="sendMessageHandle"
      @keydown.enter="sendMessageHandle"
    ></v-text-field>
  </div>
</template>

<style scoped lang="scss"></style>

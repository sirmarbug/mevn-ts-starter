<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
import { storeToRefs } from 'pinia'

const chatStore = useChatStore()
const { messages } = storeToRefs(chatStore)
</script>

<template>
  <div class="chat-wrapper w-100">
    <p v-for="(message, index) in messages" :key="index" class="message">
      <span class="font-weight-bold">{{ message.date }}</span>
      <span>{{ message.text }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.chat-wrapper {
  height: 40vh;
  overflow-y: scroll;
}

.message {
  margin-bottom: 1rem;

  span:first-child {
    margin-right: 0.5rem;
  }
}
</style>

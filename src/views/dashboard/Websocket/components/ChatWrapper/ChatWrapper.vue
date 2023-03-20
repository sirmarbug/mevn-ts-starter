<script setup lang="ts">
// defineProps({
//   title: { type: String, required: true },
//   path: { type: Array, required: true },
//   backAction: { type: Boolean },
//   actions: { type: Boolean }
// })

import { ref } from 'vue'
import dayjs from 'dayjs'

const messages = ref([
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: 'Testowa wiadomość'
  },
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: 'Testowa wiadomość 2'
  },
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: 'Testowa wiadomość 3'
  },
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: 'Testowa wiadomość 4'
  },
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: 'Testowa wiadomość 5'
  },
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    date: dayjs().format('DD-MM-YYYY hh:mm:ss'),
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
])
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

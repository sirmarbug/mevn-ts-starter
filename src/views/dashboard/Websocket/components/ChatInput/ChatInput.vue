<script setup lang="ts">
// defineProps({
//   title: { type: String, required: true },
//   path: { type: Array, required: true },
//   backAction: { type: Boolean },
//   actions: { type: Boolean }
// })

import { ref } from 'vue'
import dayjs from 'dayjs'

const message = ref('')

const sendMessageHandle = () => {
  console.log('sendMessageHandle', message.value)
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
      @click:append-inner="sendMessageHandle"
      @keydown.enter="sendMessageHandle"
    ></v-text-field>
  </div>
</template>

<style scoped lang="scss"></style>

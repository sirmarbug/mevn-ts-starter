<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import { onMounted, onUnmounted, ref } from 'vue'
import { fetchPosts } from '@/api'
import { connect, disconnect, sendMessage } from '@/websockets'

const { t } = useI18n()

const dateTime = ref<string>(dayjs().locale('pl').format('DD MMMM YYYY HH:mm'))

const sendMessageClick = () => {
  sendMessage('sendMessageClick')
}

onMounted(async () => {
  const { data } = await fetchPosts()
  console.log('data', data)
  connect()
})

onUnmounted(() => {
  disconnect()
})
</script>

<template>
  <div class="about">
    <h1 @click="sendMessageClick">This is an about page</h1>
    <h2>Teraz mam: {{ dateTime }}</h2>
    <v-alert
      type="success"
      :title="t('hello')"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
    ></v-alert>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import { ref } from 'vue'

const { t } = useI18n()

const dateTime = ref<string>(dayjs().locale('pl').format('DD MMMM YYYY HH:mm'))
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
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

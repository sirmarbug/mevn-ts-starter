<script setup lang="ts">
import GlobalLayout from '@/layouts/GlobalLayout/GlobalLayout.vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const goToApp = () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <GlobalLayout>
    <v-row no-gutters>
      <v-col cols="12" sm="4" offset-sm="4" class="d-flex justify-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      </v-col>
    </v-row>
    <v-row no-gutters class="my-6">
      <v-col
        cols="12"
        sm="4"
        offset-sm="4"
        class="d-flex flex-column justify-center align-center text-center"
      >
        <h1 class="text-primary">Starter Vue 3 + TS</h1>
        <h2 class="text-primary">v.1.0.0</h2>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <p>
          {{ t('homeView.title') }}
        </p>
        <p>{{ t('homeView.author') }} <strong>Mariusz Bugajski</strong></p>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-6">
      <v-col cols="12" sm="6" offset-sm="3" class="d-flex justify-center text-center">
        <v-btn variant="flat" color="primary" @click="goToApp">{{ t('homeView.action') }}</v-btn>
      </v-col>
    </v-row>
  </GlobalLayout>
</template>

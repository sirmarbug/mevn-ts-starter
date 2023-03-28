<script setup lang="ts">
import GlobalLayout from '@/layouts/GlobalLayout/GlobalLayout.vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const goToApp = () => {
  router.push({ name: 'StartView' })
}
</script>

<template>
  <GlobalLayout>
    <v-row no-gutters>
      <v-col cols="12" sm="4" offset-sm="4" class="d-flex justify-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      </v-col>
    </v-row>
    <v-card-title class="d-flex justify-center">{{ t('forbidden.title') }}</v-card-title>
    <v-card-subtitle class="d-flex justify-center">{{ t('forbidden.subtitle') }}</v-card-subtitle>
    <v-card-text class="d-flex justify-center"> {{ t('forbidden.body') }} </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn variant="flat" color="primary" @click="goToApp">{{ t('forbidden.action') }}</v-btn>
    </v-card-actions>
  </GlobalLayout>
</template>

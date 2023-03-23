<script setup lang="ts">
import GlobalLayout from '@/layouts/GlobalLayout/GlobalLayout.vue'
import { useRouter } from 'vue-router'
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
    <v-card-title class="d-flex justify-center">Error 500</v-card-title>
    <v-card-subtitle class="d-flex justify-center"
      >Przepraszamy wystąpił nieoczekiwany błąd.</v-card-subtitle
    >
    <v-card-text class="d-flex justify-center"> Nasi programiści już nad tym pracują </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn variant="flat" color="primary" @click="goToApp">Wróc do strony głównej</v-btn>
    </v-card-actions>
  </GlobalLayout>
</template>

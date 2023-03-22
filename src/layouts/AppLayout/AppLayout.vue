<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
import Snackbar from '@/components/Snackbar/Snackbar.vue'
</script>

<template>
  <v-app>
    <v-layout full-height>
      <AppNavbar />
      <AppSidebar />
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
    <Snackbar />
  </v-app>
</template>

<style scoped></style>

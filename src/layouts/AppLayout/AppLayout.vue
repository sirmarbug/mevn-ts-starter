<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <v-app>
    <v-layout full-height>
      <AppNavbar />
      <AppSidebar />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>

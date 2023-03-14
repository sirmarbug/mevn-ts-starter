<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-row no-gutters class="mb-12">
    <v-col cols="12" sm="4" offset-sm="4" class="d-flex justify-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />
    </v-col>
  </v-row>
  <v-row no-gutters class="mb-6">
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center">
      <span class="text-h3">Starter Vue 3 TS</span>
    </v-col>
  </v-row>
  <v-row no-gutters class="mb-12">
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <span class="text-subtitle-1">
        Zaloguj się i poznaj wszystkie możliwości jakie daje ten starter
      </span>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-text-field label="Adres E-mail" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-text-field type="password" label="Hasło" variant="outlined"></v-text-field>
    </v-col>
  </v-row>
  <v-row no-gutters class="mb-12">
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <v-btn variant="flat" color="primary" block size="large">Zaloguj się</v-btn>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <span class="text-subtitle-1">
        Nie masz jeszcze konta?
        <RouterLink :to="{ name: 'Register' }">Założ je już teraz</RouterLink>
      </span>
    </v-col>
  </v-row>
</template>

<style scoped></style>

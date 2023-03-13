<script setup lang="ts"></script>

<template>
  <v-app-bar flat class="px-4">
    <img alt="Vue logo" src="@/assets/logo.svg" width="40" height="40" />
    <v-app-bar-title> Starter Vue 3 TS </v-app-bar-title>
    <v-spacer />
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account-circle" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item prepend-icon="mdi-logout">
          <v-list-item-title>Wyloguj</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped></style>

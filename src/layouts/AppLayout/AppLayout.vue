<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-layout full-height>
      <v-app-bar flat class="px-4">
        <img alt="Vue logo" src="@/assets/logo.svg" width="40" height="40" />
        <v-app-bar-title> Starter Vue 3 TS </v-app-bar-title>
        <v-spacer />
        <!--        <v-btn icon="mdi-logout" />-->
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

      <v-navigation-drawer>
        <v-list nav color="primary">
          <v-list-item
            prepend-icon="mdi-monitor-dashboard"
            title="Dashboard"
            value="dashboard"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-chart-bar" title="Wykresy" value="charts"></v-list-item>
          <v-list-item prepend-icon="mdi-vuetify" title="Vuetify" value="vuetify"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>

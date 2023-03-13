<script setup lang="ts">
import { ref } from 'vue'

const menu = ref([
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Dashboard',
    value: 'dashboard'
  },
  {
    icon: 'mdi-chart-bar',
    title: 'Wykresy',
    value: 'chars'
  },
  {
    icon: 'mdi-vuetify',
    title: 'Vuetify',
    value: 'vuetify'
  }
])
</script>

<template>
  <v-navigation-drawer>
    <v-list nav color="primary">
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>

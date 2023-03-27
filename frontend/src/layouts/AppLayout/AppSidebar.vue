<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { SidebarItem } from '@/types'

const route = useRoute()

const menu = ref<SidebarItem[]>([
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Dashboard',
    value: 'Home',
    to: '/dashboard/home'
  },
  {
    icon: 'mdi-translate',
    title: 'Tłumaczenia',
    value: 'Translate',
    to: '/dashboard/translate'
  },
  {
    icon: 'mdi-store',
    title: 'Store',
    value: 'Store',
    to: '/dashboard/store'
  },
  {
    icon: 'mdi-vuetify',
    title: 'Vuetify',
    value: 'Vuetify',
    to: '/dashboard/vuetify'
  },
  {
    icon: 'mdi-arrow-left-right-bold-outline',
    title: 'Rest Api',
    value: 'RestApi',
    to: '/dashboard/rest-api'
  },
  {
    icon: 'mdi-web',
    title: 'Websocket',
    value: 'Websocket',
    to: '/dashboard/websocket'
  }
])

const currentPage = computed<string>(() => (route.name ? route.name.toString() : ''))
</script>

<template>
  <v-navigation-drawer>
    <v-list nav color="primary">
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        :active="item.value === currentPage"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :to="item.to"
      ></v-list-item>
    </v-list>
    <template #append>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center text-secondary font-weight-bold"> v.0.1.0 </v-col>
        </v-row>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<style scoped></style>

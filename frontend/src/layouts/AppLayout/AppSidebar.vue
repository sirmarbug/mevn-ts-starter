<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { SidebarItem } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const version = `v.${import.meta.env.VITE_APP_VERSION}`

const menu = ref<SidebarItem[]>([
  {
    icon: 'mdi-monitor-dashboard',
    title: t('navigation.dashboard'),
    value: 'Home',
    to: '/dashboard/home'
  },
  {
    icon: 'mdi-translate',
    title: t('navigation.translations'),
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
    icon: 'mdi-book-open',
    title: t('navigation.posts'),
    value: 'Posts',
    to: '/dashboard/posts'
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
          <v-col class="d-flex justify-center text-secondary font-weight-bold">
            {{ version }}
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<style scoped></style>

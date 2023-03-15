<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const darkMode = ref<boolean>(false)

const changeThemeModeHandle = () => {
  darkMode.value = !darkMode.value
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar flat class="px-4">
    <img alt="Vue logo" src="@/assets/logo.svg" width="40" height="40" />
    <v-app-bar-title> Starter Vue 3 TS </v-app-bar-title>
    <v-spacer />
    <v-btn icon flat @click="changeThemeModeHandle">
      <v-icon :icon="darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"></v-icon>
    </v-btn>
    <v-menu width="350" location="bottom">
      <template v-slot:activator="{ props }">
        <v-badge dot color="red" class="ml-4 mr-8" v-bind="props">
          <v-icon icon="mdi-bell-outline" size="x-large"></v-icon>
        </v-badge>
      </template>
      <v-list lines="two">
        <v-list-item value="1">
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-1" size="small">
              <v-icon color="white" size="x-small">mdi-square-rounded-badge-outline</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis, nisi quo
            temporibus tenetur veniam veritatis voluptates!
          </v-list-item-title>
          <v-list-item-subtitle> 15.03.2023 </v-list-item-subtitle>
        </v-list-item>
        <v-list-item value="2" active active-color="primary">
          <template v-slot:prepend>
            <v-avatar color="primary" size="small">
              <v-icon color="white" size="x-small">mdi-square-rounded-badge-outline</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis, nisi quo
            temporibus tenetur veniam veritatis voluptates!
          </v-list-item-title>
          <v-list-item-subtitle> 15.03.2023 </v-list-item-subtitle>
        </v-list-item>
        <v-list-item value="3">
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-1" size="small">
              <v-icon color="white" size="x-small">mdi-square-rounded-badge-outline</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis, nisi quo
            temporibus tenetur veniam veritatis voluptates!
          </v-list-item-title>
          <v-list-item-subtitle> 15.03.2023 </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu width="200">
      <template v-slot:activator="{ props }">
        <v-avatar color="primary" v-bind="props">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </template>

      <v-list>
        <v-list-item prepend-icon="mdi-account">
          <v-list-item-title>Profil</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item prepend-icon="mdi-logout">
          <v-list-item-title>Wyloguj</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped></style>

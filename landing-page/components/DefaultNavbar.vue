<script lang="ts" setup>
const goToHome = async () => {
  await navigateTo('/')
}

const goToBlog = async () => {
  await navigateTo('/blog')
}

</script>

<template>
  <q-header>
    <q-toolbar>
      <q-avatar class="q-mr-md">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      <q-separator dark vertical />
      <q-toolbar-title class="cursor-pointer" @click="goToHome">MEVN Starter TS</q-toolbar-title>

      <q-btn stretch flat class="lt-md"><IconsMenu/></q-btn>
      <q-btn stretch flat class="gt-md" label="Strona główa" />
      <q-btn stretch flat class="gt-md" label="Opis" />
      <q-btn stretch flat class="gt-md" label="Funkcje" />
      <q-btn stretch flat class="gt-md" label="Cena" />
      <q-btn stretch flat class="gt-md" label="Blog" @click="goToBlog" />
    </q-toolbar>
  </q-header>
</template>

<style scoped>

</style>

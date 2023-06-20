<script setup lang="ts">
</script>

<template>
<div>
  <q-layout view="lHh lpr lFf" container style="height: 100vh">
    <q-header>
      <q-toolbar>
        <q-avatar class="q-mr-md">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        <q-separator dark vertical />
        <q-toolbar-title>MEVN Starter TS</q-toolbar-title>

        <q-btn stretch flat label="Strona główa" />
        <q-btn stretch flat label="Opis" />
        <q-btn stretch flat label="Funkcje" />
        <q-btn stretch flat label="Kontakt" />
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <q-page class="q-pa-md">
        <slot/>
      </q-page>
    </q-page-container>
  </q-layout>
</div>
</template>

<style scoped>

</style>

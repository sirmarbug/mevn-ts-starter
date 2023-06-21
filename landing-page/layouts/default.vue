<script setup lang="ts">
</script>

<template>
<div>
  <q-layout view="lHh lpr lFf" container style="height: 100vh">
    <DefaultNavbar/>
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

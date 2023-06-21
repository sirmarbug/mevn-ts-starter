<script setup lang="ts">
</script>

<template>
<div>
  <q-layout view="lHh lpr lff" container style="height: 100vh">
    <DefaultNavbar/>
    <DefaultFooter/>

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

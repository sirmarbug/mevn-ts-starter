<script setup lang="ts">
defineProps({
  title: { type: String, required: true }
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h5 font-weight-bold">{{ title }}</span>
    </v-col>
  </v-row>
</template>

<style scoped></style>

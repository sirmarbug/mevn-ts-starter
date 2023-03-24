<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { storeToRefs } from 'pinia'

const commonStore = useCommonStore()
const { snackbar } = storeToRefs(commonStore)
</script>

<template>
  <v-snackbar v-model="snackbar.display" :color="snackbar.color" :timeout="snackbar.timeout">
    {{ snackbar.text }}
  </v-snackbar>
</template>

<style scoped></style>

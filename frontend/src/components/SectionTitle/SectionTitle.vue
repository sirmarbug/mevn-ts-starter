<script setup lang="ts">
interface SectionTitleProps {
  title: string
}

defineProps<SectionTitleProps>()
</script>

<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h6 font-weight-bold">{{ title }}</span>
    </v-col>
  </v-row>
</template>

<style scoped></style>

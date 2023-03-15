<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps({
  title: { type: String, required: true },
  path: { type: Array, required: true },
  backAction: { type: Boolean },
  actions: { type: Boolean }
})

const router = useRouter()

const goToBack = () => {
  router.back()
}
</script>

<template>
  <v-row>
    <v-col>
      <div class="d-flex align-center">
        <v-btn
          v-if="backAction"
          icon
          flat
          color="transparent"
          size="small"
          class="mr-2"
          @click="goToBack"
        >
          <v-icon icon="mdi-arrow-left-bold-circle-outline" size="x-large"></v-icon>
        </v-btn>
        <span class="text-h5 font-weight-bold">{{ title }}</span>
      </div>
      <v-breadcrumbs :items="path" class="px-0"></v-breadcrumbs>
    </v-col>
    <v-col v-if="actions" class="d-flex justify-end">
      <slot name="actions"></slot>
    </v-col>
  </v-row>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  title: { type: String, default: 'Potwierdź' },
  subtitle: {
    type: String,
    default: 'Czy Jesteś pewny, że chcesz dokończyć operację?'
  }
})

const emit = defineEmits(['confirm', 'cancel'])

const cancelHandle = () => {
  emit('cancel')
}

const confirmHandle = () => {
  emit('confirm')
}

const value = ref(true)
</script>

<template>
  <v-dialog persistent width="300" v-model="value">
    <v-card>
      <v-card-title class="text-h5">{{ title }}</v-card-title>
      <v-card-text>
        {{ subtitle }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green-darken-1" variant="text" @click="cancelHandle"> Anuluj </v-btn>
        <v-btn color="green-darken-1" variant="flat" @click="confirmHandle"> Potwierdź </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  title: { type: String, default: t('dialogs.confirmDialog.title') },
  subtitle: {
    type: String,
    default: t('dialogs.confirmDialog.subtitle')
  }
})

const emit = defineEmits(['confirm', 'cancel'])

const cancelHandle = () => {
  emit('cancel')
}

const confirmHandle = () => {
  emit('confirm')
}

const value = ref<boolean>(true)
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
        <v-btn color="green-darken-1" variant="text" @click="cancelHandle">
          {{ t('confirm.cancel') }}
        </v-btn>
        <v-btn color="green-darken-1" variant="flat" @click="confirmHandle">
          {{ t('common.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref, withDefaults } from 'vue'
import { useI18n } from 'vue-i18n'
import i18n from '@/locales'

interface ConfirmDialogProps {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<ConfirmDialogProps>(), {
  title: i18n.global.t('dialogs.confirmDialog.title'),
  subtitle: i18n.global.t('dialogs.confirmDialog.subtitle')
})

const emit = defineEmits(['confirm', 'cancel'])

const { t } = useI18n()

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
          {{ t('common.cancel') }}
        </v-btn>
        <v-btn color="green-darken-1" variant="flat" @click="confirmHandle">
          {{ t('common.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>

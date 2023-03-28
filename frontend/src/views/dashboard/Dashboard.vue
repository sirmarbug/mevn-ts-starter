<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView :title="t('dashboard.name')" :path="[t('dashboard.path')]"> </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">{{ t('dashboard.title') }}</span>
              <p class="text-body-1">
                {{ t('dashboard.subtitle') }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import type { LanguageItem } from '@/types'

const { locale, t } = useI18n()

const availableLanguages: LanguageItem[] = [
  {
    title: t('languages.polish'),
    value: 'pl'
  },
  {
    title: t('languages.english'),
    value: 'en'
  }
]

const currentLanguage = ref<string>(locale.value)

const changeLanguageHandle = () => {
  locale.value = currentLanguage.value
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView :title="t('translate.name')" :path="[t('translate.path')]"> </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle :title="t('translate.settings.title')"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <span class="text-h5">{{ t('translate.settings.changeLanguage') }}</span>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="currentLanguage"
                      variant="outlined"
                      :label="t('translate.settings.selectLanguage')"
                      :items="availableLanguages"
                      hide-details
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-end">
                    <v-btn variant="flat" color="primary" @click="changeLanguageHandle">
                      {{ t('common.save') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle :title="t('translate.example.title')"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card flat class="h-100 rounded-xl pa-6">
              <span class="text-h5">{{ t('translate.example.basicTranslate') }}</span>
              <p class="text-body-1">
                {{ t('translate.example.hello') }}
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card flat class="h-100 rounded-xl pa-6">
              <span class="text-h5">{{ t('translate.example.translateWithParams') }}</span>
              <p class="text-body-1">
                {{ t('translate.example.minChars', { min: 10 }) }}
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">{{ t('translate.example.pluralization') }}</span>
              <p class="text-body-1">{{ t('translate.example.car', 1) }}</p>
              <p class="text-body-1">{{ t('translate.example.car', 2) }}</p>

              <p class="text-body-1">{{ t('translate.example.apple', 0) }}</p>
              <p class="text-body-1">{{ t('translate.example.apple', 1) }}</p>
              <p class="text-body-1">{{ t('translate.example.apple', 10, { count: 10 }) }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

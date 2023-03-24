<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale, t } = useI18n()

const availableLanguages = [
  {
    title: 'Polski',
    value: 'pl'
  },
  {
    title: 'Angielski',
    value: 'en'
  }
]

const currentLanguage = ref(locale.value)

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
            <TitleView title="Tłumaczenia" :path="['Tłumaczenia']"> </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="Ustawienia"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <span class="text-h5">Zmień język</span>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="currentLanguage"
                      variant="outlined"
                      label="Wybierz język"
                      :items="availableLanguages"
                      hide-details
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-end">
                    <v-btn variant="flat" color="primary" @click="changeLanguageHandle">
                      Zapisz
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="Przykłady"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card flat class="h-100 rounded-xl pa-6">
              <span class="text-h5">Podstawowe tłumaczenie</span>
              <p class="text-body-1">
                {{ t('exampleTranslations.hello') }}
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card flat class="h-100 rounded-xl pa-6">
              <span class="text-h5">Tłumaczenie z parametrami</span>
              <p class="text-body-1">
                {{ t('exampleTranslations.minChars', { min: 10 }) }}
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Pluralizacja</span>
              <p class="text-body-1">{{ t('exampleTranslations.car', 1) }}</p>
              <p class="text-body-1">{{ t('exampleTranslations.car', 2) }}</p>

              <p class="text-body-1">{{ t('exampleTranslations.apple', 0) }}</p>
              <p class="text-body-1">{{ t('exampleTranslations.apple', 1) }}</p>
              <p class="text-body-1">{{ t('exampleTranslations.apple', 10, { count: 10 }) }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

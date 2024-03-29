<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { required, emailValidation } from '@/validations'
import { ref } from 'vue'
import type { VFormElement } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const form = ref<VFormElement | null>(null)

const loginHandle = async () => {
  if (!form.value) {
    return
  }
  const { valid } = await form.value.validate()
  if (!valid) {
    return
  }
  localStorage.setItem('token', Math.ceil(Math.random() * 1000).toString())
  await router.push({ name: 'Home' })
}

const showPassword = ref<boolean>()

const toggleShowPasswordHandle = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <v-row no-gutters class="mb-12">
    <v-col cols="12" sm="4" offset-sm="4" class="d-flex justify-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
    </v-col>
  </v-row>
  <v-row no-gutters class="mb-6">
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center">
      <span class="text-h4">{{ t('login.title') }}</span>
    </v-col>
  </v-row>
  <v-row no-gutters class="mb-12">
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <span class="text-subtitle-1">
        {{ t('login.subtitle') }}
      </span>
    </v-col>
  </v-row>
  <v-form ref="form" @submit.prevent="loginHandle">
    <v-row no-gutters>
      <v-col cols="12" sm="6" offset-sm="3" class="mb-4">
        <v-text-field
          :label="t('common.email')"
          variant="outlined"
          validate-on="blur"
          :rules="[required, emailValidation]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" offset-sm="3" class="mb-4">
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          :label="t('common.password')"
          variant="outlined"
          validate-on="blur"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="[required]"
          @click:appendInner="toggleShowPasswordHandle"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters class="mb-12">
      <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
        <v-btn type="submit" variant="flat" color="primary" block size="large">
          {{ t('login.submit') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
  <v-row no-gutters>
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <span class="text-subtitle-1">
        {{ t('login.youDontHaveAnAccountYet') }}
        <RouterLink :to="{ name: 'Register' }">{{ t('login.registerNow') }}</RouterLink>
      </span>
    </v-col>
  </v-row>
</template>

<style scoped></style>

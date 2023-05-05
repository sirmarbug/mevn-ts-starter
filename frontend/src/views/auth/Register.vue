<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { required, emailValidation, minChars, maxChars } from '@/validations'
import { ref } from 'vue'
import { RegisterForm, VFormElement } from '@/types'
import { useI18n } from 'vue-i18n'
import { error } from '@/utils/logger'
import { register } from '@/api/auth'

const { t } = useI18n()
const router = useRouter()

const form = ref<VFormElement | null>(null)

const registerForm = ref<RegisterForm>({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

const registerHandle = async () => {
  if (!form.value) {
    return
  }
  const { valid } = await form.value.validate()
  if (!valid) {
    return
  }

  try {
    await register(registerForm.value)
    await router.push({ name: 'Login' })
  } catch (e) {
    error('registerHandle', e)
  }
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
      <span class="text-h4">{{ t('register.title') }}</span>
    </v-col>
  </v-row>
  <v-row no-gutters class="mb-12">
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <span class="text-subtitle-1">
        {{ t('register.subtitle') }}
      </span>
    </v-col>
  </v-row>
  <v-form ref="form" @submit.prevent="registerHandle">
    <v-row no-gutters>
      <v-col cols="12" sm="6" offset-sm="3" class="mb-4">
        <v-text-field
          v-model="registerForm.firstName"
          :label="t('common.firstName')"
          variant="outlined"
          validate-on="blur"
          :rules="[required]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" offset-sm="3" class="mb-4">
        <v-text-field
          v-model="registerForm.lastName"
          :label="t('common.lastName')"
          variant="outlined"
          validate-on="blur"
          :rules="[required]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" offset-sm="3" class="mb-4">
        <v-text-field
          v-model="registerForm.email"
          :label="t('common.email')"
          variant="outlined"
          validate-on="blur"
          :rules="[required, emailValidation]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" offset-sm="3" class="mb-4">
        <v-text-field
          v-model="registerForm.password"
          :type="showPassword ? 'text' : 'password'"
          :label="t('common.password')"
          variant="outlined"
          validate-on="blur"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="[required, minChars(6), maxChars(10)]"
          @click:appendInner="toggleShowPasswordHandle"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters class="mb-12">
      <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
        <v-btn type="submit" variant="flat" color="primary" block size="large">
          {{ t('register.submit') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
  <v-row no-gutters>
    <v-col cols="12" sm="6" offset-sm="3" class="d-flex flex-column align-center text-center">
      <span class="text-subtitle-1">
        {{ t('register.alreadyHaveAnAccount') }}
        <RouterLink :to="{ name: 'Login' }">
          {{ t('register.loginNow') }}
        </RouterLink>
      </span>
    </v-col>
  </v-row>
</template>

<style scoped></style>

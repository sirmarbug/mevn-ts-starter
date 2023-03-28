<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { required, emailValidation } from '@/validations'
import { useUsersStore } from '@/stores/users'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchUserDetails } from '@/api'
import { error } from '@/utils/logger'
import type { UserForm, UserUpdatePayload, VFormElement } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const usersStore = useUsersStore()
const { add, update } = usersStore

const isAddMode = computed<boolean>(() => route.name === 'RestApiAdd')
const isPreviewMode = computed<boolean>(() => route.name === 'RestApiDetails')
const isEditMode = computed<boolean>(() => route.name === 'RestApiEdit')

const path = computed<string[]>(() => {
  const result = ['RestApi']
  if (isAddMode.value) {
    result.push(t('common.add'))
  }
  if (isPreviewMode.value) {
    result.push(t('common.preview'))
  }
  if (isEditMode.value) {
    result.push(t('common.edit'))
  }
  return result
})

const userForm = ref<UserForm>({
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  company: {
    name: ''
  },
  address: {
    city: '',
    street: '',
    zipcode: '',
    suite: ''
  }
})

const fetchData = async () => {
  try {
    const { data } = await fetchUserDetails(route.params.id)
    userForm.value = data
  } catch (e) {
    error('fetchData', e)
  }
}

const goToRestApi = () => {
  router.push({ name: 'RestApi' })
}

const form = ref<VFormElement | null>(null)

const submitHandle = async () => {
  if (!form.value) {
    return
  }
  const { valid } = await form.value.validate()
  if (!valid) {
    return
  }

  try {
    if (isEditMode.value) {
      const user: UserUpdatePayload = {
        id: route.params.id.toString(),
        ...userForm.value
      }
      await update(user)
    } else {
      await add(userForm.value)
    }

    goToRestApi()
  } catch (e) {
    error('submitHandle', e)
  }
}

onMounted(async () => {
  if (isPreviewMode.value || isEditMode.value) {
    await fetchData()
  }
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-form ref="form" @submit.prevent="submitHandle">
          <v-row>
            <v-col cols="12">
              <TitleView title="RestApi" :path="path" actions back-action>
                <template #actions>
                  <v-btn v-if="!isPreviewMode" type="submit" flat color="primary">
                    {{ isEditMode ? t('common.edit') : t('common.add') }}
                  </v-btn>
                </template>
              </TitleView>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <SectionTitle :title="t('rest.form.basicData')" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat class="rounded-xl pa-6">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.name"
                        :label="t('common.fullName')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.username"
                        :label="t('common.username')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.email"
                        :label="t('common.email')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required, emailValidation]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.phone"
                        :label="t('common.phone')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.company.name"
                        :label="t('common.company')"
                        variant="outlined"
                        validate-on="blur"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.website"
                        :label="t('common.website')"
                        variant="outlined"
                        validate-on="blur"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <SectionTitle :title="t('rest.form.address')" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat class="rounded-xl pa-6">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.address.city"
                        :label="t('common.city')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.address.street"
                        :label="t('common.street')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.address.zipcode"
                        :label="t('common.zipcode')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.address.suite"
                        :label="t('common.nr')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { required, emailValidation } from '@/validations'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const usersStore = useUsersStore()

const { add } = usersStore

const isPreviewMode = computed(() => route.name === 'RestApiDetails')

const userForm = ref<any>({
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

const goToRestApi = () => {
  router.push({ name: 'RestApi' })
}

const form = ref<any>(null)

const submitHandle = async () => {
  const { valid } = await form.value.validate()
  if (!valid) {
    return
  }
  add(userForm.value)
}

onMounted(async () => {
  // await getAllUser()
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-form ref="form" @submit.prevent="submitHandle">
          <v-row>
            <v-col cols="12">
              <TitleView title="RestApi" :path="['RestApi', 'Dodaj']" actions>
                <template #actions>
                  <v-btn flat variant="text" class="mr-4" @click="goToRestApi"> Anuluj </v-btn>
                  <v-btn v-if="!isPreviewMode" type="submit" flat color="primary"> Dodaj </v-btn>
                </template>
              </TitleView>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <SectionTitle title="Podstawowe dane" />
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
                        label="Imię i nazwisko"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.username"
                        label="Username"
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
                        label="Email"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required, emailValidation]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.phone"
                        label="Telefon"
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
                        label="Firma"
                        variant="outlined"
                        validate-on="blur"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.website"
                        label="Strona www"
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
              <SectionTitle title="Adress" />
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
                        label="Miasto"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.address.street"
                        label="Ulica"
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
                        label="Kod pocztowy"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="userForm.address.suite"
                        label="Numer lokalu"
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

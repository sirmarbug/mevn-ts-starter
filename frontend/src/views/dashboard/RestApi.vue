<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import { error } from '@/utils/logger'
import type { UserDTO } from '@/types'
import { useI18n } from 'vue-i18n'
const ConfirmRemoveUserDialog = defineAsyncComponent(
  () => import('@/components/dialogs/ConfirmDialog/ConfirmDialog.vue')
)

const { t } = useI18n()
const router = useRouter()
const usersStore = useUsersStore()
const commonStore = useCommonStore()
const { displaySnackbar } = commonStore

const { users } = storeToRefs(usersStore)

const { getAllUser, remove } = usersStore

const addNewUserHandle = () => {
  router.push({ name: 'RestApiAdd' })
}

const showDetails = (user: UserDTO) => {
  router.push({ name: 'RestApiDetails', params: { id: user.id } })
}

const goToEdit = (user: UserDTO) => {
  router.push({ name: 'RestApiEdit', params: { id: user.id } })
}

const selectedUserToRemove = ref<UserDTO | null>(null)

const displayConfirmRemoveUserDialog = ref<boolean>(false)

const removeUserHandle = (user: UserDTO) => {
  displayConfirmRemoveUserDialog.value = true
  selectedUserToRemove.value = user
}

const cancelRemoveUserHandle = () => {
  displayConfirmRemoveUserDialog.value = false
}

const confirmRemoveUserHandle = async () => {
  if (!selectedUserToRemove.value) {
    return
  }
  try {
    await remove(selectedUserToRemove.value.id)
    displayConfirmRemoveUserDialog.value = false
    selectedUserToRemove.value = null
    displaySnackbar({
      text: 'Poprawnie usunięto użytkownika',
      color: 'success'
    })
  } catch (e) {
    error('confirmRemoveUserHandle', e)
  }
}

onMounted(async () => {
  await getAllUser()
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView title="RestApi" :path="['RestApi']" actions>
              <template #actions>
                <v-btn flat color="primary" @click="addNewUserHandle">
                  {{ $t('common.add') }}
                </v-btn>
              </template>
            </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6">
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('rest.tableHeaders.fullName') }}</th>
                    <th class="text-left">{{ $t('rest.tableHeaders.username') }}</th>
                    <th class="text-left">{{ $t('rest.tableHeaders.addressEmail') }}</th>
                    <th class="text-left">{{ $t('rest.tableHeaders.actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.name">
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <div class="w-100 d-flex justify-end">
                        <v-btn icon flat>
                          <v-icon
                            icon="mdi-eye-outline"
                            color="secondary"
                            @click="showDetails(user)"
                          ></v-icon>
                        </v-btn>
                        <v-btn icon flat>
                          <v-icon icon="mdi-pencil" color="info" @click="goToEdit(user)"></v-icon>
                        </v-btn>
                        <v-btn icon flat>
                          <v-icon
                            icon="mdi-delete"
                            color="error"
                            @click="removeUserHandle(user)"
                          ></v-icon>
                        </v-btn>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
  <ConfirmRemoveUserDialog
    v-if="displayConfirmRemoveUserDialog"
    @cancel="cancelRemoveUserHandle"
    @confirm="confirmRemoveUserHandle"
  />
</template>

<style scoped></style>

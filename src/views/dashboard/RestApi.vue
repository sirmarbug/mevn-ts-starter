<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usersStore = useUsersStore()

const { users } = storeToRefs(usersStore)

const { getAllUser } = usersStore

const addNewUserHandle = () => {
  router.push({ name: 'RestApiAdd' })
}

const showDetails = (user: any) => {
  router.push({ name: 'RestApiDetails', params: { id: user.id } })
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
                <v-btn flat color="primary" @click="addNewUserHandle"> Dodaj </v-btn>
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
                    <th class="text-left">Name</th>
                    <th class="text-left">Username</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Actions</th>
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
                          <v-icon icon="mdi-pencil" color="info"></v-icon>
                        </v-btn>
                        <v-btn icon flat>
                          <v-icon icon="mdi-delete" color="error"></v-icon>
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
</template>

<style scoped></style>

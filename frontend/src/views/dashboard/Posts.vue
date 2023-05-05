<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import { error } from '@/utils/logger'
import type { Post } from '@/types'
import { useI18n } from 'vue-i18n'
import { usePostsStore } from '@/stores/posts'
import dayjs from 'dayjs'
const ConfirmRemovePostDialog = defineAsyncComponent(
  () => import('@/components/dialogs/ConfirmDialog/ConfirmDialog.vue')
)

const { t } = useI18n()
const router = useRouter()
const postsStore = usePostsStore()
const commonStore = useCommonStore()
const { displaySnackbar } = commonStore

const { posts } = storeToRefs(postsStore)

const { getAllPosts, remove } = postsStore

const addNewPostHandle = () => {
  router.push({ name: 'PostFormAdd' })
}

const showDetails = (post: Post) => {
  router.push({ name: 'PostFormDetails', params: { id: post._id } })
}

const goToEdit = (post: Post) => {
  router.push({ name: 'PostFormEdit', params: { id: post._id } })
}

const selectedPostToRemove = ref<Post | null>(null)

const displayConfirmRemovePostDialog = ref<boolean>(false)

const removePostHandle = (post: Post) => {
  displayConfirmRemovePostDialog.value = true
  selectedPostToRemove.value = post
}

const cancelRemovePostHandle = () => {
  displayConfirmRemovePostDialog.value = false
}

const dateFormat = (date: Date) => dayjs(date).format('DD-MM-YYYY HH:mm')

const confirmRemovePostHandle = async () => {
  if (!selectedPostToRemove.value) {
    return
  }
  try {
    await remove(selectedPostToRemove.value._id)
    displayConfirmRemovePostDialog.value = false
    selectedPostToRemove.value = null
    displaySnackbar({
      text: 'Poprawnie usunięto post',
      color: 'success'
    })
  } catch (e) {
    error('confirmRemovePostHandle', e)
  }
}

onMounted(async () => {
  await getAllPosts()
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView title="Posts" :path="['Posts']" actions>
              <template #actions>
                <v-btn flat color="primary" @click="addNewPostHandle">
                  {{ t('common.add') }}
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
                    <th class="text-left">{{ t('posts.tableHeaders.firstName') }}</th>
                    <th class="text-left">{{ t('posts.tableHeaders.lastName') }}</th>
                    <th class="text-left">{{ t('posts.tableHeaders.date') }}</th>
                    <th class="text-left">{{ t('posts.tableHeaders.actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.author.firstName }}</td>
                    <td>{{ post.author.lastName }}</td>
                    <td>{{ dateFormat(post.date) }}</td>
                    <td>
                      <div class="w-100 d-flex justify-end">
                        <v-btn icon flat>
                          <v-icon
                            icon="mdi-eye-outline"
                            color="secondary"
                            @click="showDetails(post)"
                          ></v-icon>
                        </v-btn>
                        <v-btn icon flat>
                          <v-icon icon="mdi-pencil" color="info" @click="goToEdit(post)"></v-icon>
                        </v-btn>
                        <v-btn icon flat>
                          <v-icon
                            icon="mdi-delete"
                            color="error"
                            @click="removePostHandle(post)"
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
  <ConfirmRemovePostDialog
    v-if="displayConfirmRemovePostDialog"
    @cancel="cancelRemovePostHandle"
    @confirm="confirmRemovePostHandle"
  />
</template>

<style scoped></style>

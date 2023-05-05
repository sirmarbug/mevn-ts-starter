<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { required } from '@/validations'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { error } from '@/utils/logger'
import type { PostForm, PostFormPayload, VFormElement } from '@/types'
import { useI18n } from 'vue-i18n'
import { usePostsStore } from '@/stores/posts'
import { fetchPostDetails } from '@/api/posts'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const postsStore = usePostsStore()
const { add, update } = postsStore

const isAddMode = computed<boolean>(() => route.name === 'PostFormAdd')
const isPreviewMode = computed<boolean>(() => route.name === 'PostFormDetails')
const isEditMode = computed<boolean>(() => route.name === 'PostFormEdit')

const path = computed<string[]>(() => {
  const result = ['Posts']
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

const postForm = ref<PostForm>({
  firstName: '',
  lastName: '',
  text: ''
})

const fetchData = async () => {
  try {
    const { data } = await fetchPostDetails(route.params.id)
    postForm.value = {
      firstName: data.author.firstName,
      lastName: data.author.lastName,
      text: data.text
    }
  } catch (e) {
    error('fetchData', e)
  }
}

const goToRestApi = () => {
  router.push({ name: 'Posts' })
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
      const post: PostFormPayload = {
        _id: route.params.id.toString(),
        ...postForm.value
      }
      await update(post)
    } else {
      await add(postForm.value)
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
              <TitleView title="Posts" :path="path" actions back-action>
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
              <SectionTitle :title="t('posts.form.author')" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat class="rounded-xl pa-6">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="postForm.firstName"
                        :label="t('common.firstName')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="postForm.lastName"
                        :label="t('common.lastName')"
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
          <v-row>
            <v-col cols="12">
              <SectionTitle :title="t('posts.form.content')" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat class="rounded-xl pa-6">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        v-model="postForm.text"
                        :label="t('common.content')"
                        variant="outlined"
                        validate-on="blur"
                        :rules="[required]"
                        :disabled="isPreviewMode"
                      ></v-textarea>
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

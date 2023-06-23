<script lang="ts" setup>
import {usePostsStore} from "~/composable/usePosts";

interface PostCardProps {
  id: number
  title: string
  body: string
}

const props = defineProps<PostCardProps>()

const { setSelectedPost } = usePostsStore()

const goToArticle = () => {
  setSelectedPost(props.id, props.title, props.body)
  navigateTo(`/blog/${props.id}`)
}
</script>

<template>
  <q-card class="post-card" flat bordered>
    <q-img
        src="https://picsum.photos/800/600"
    />

    <q-card-section>
      <div class="text-overline">23.06.2023</div>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
      <div class="text-caption text-grey">
        {{ body }}
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space />
      <q-btn flat color="secondary" label="Więcej" @click="goToArticle" />
    </q-card-actions>
  </q-card>
</template>

<style scoped>
.post-card {
  height: 100%;
}
</style>

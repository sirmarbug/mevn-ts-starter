<script setup lang="ts">
import {usePostsStore} from "~/composable/usePosts";
import {storeToRefs} from "pinia";

useHead({
  title: 'Tytuł posta'
})

const postsStore = usePostsStore()

const { selectedPost } = storeToRefs(postsStore)

const { resetSelectedPost } = postsStore

onBeforeUnmount(() => {
  resetSelectedPost()
})
</script>

<template>
  <div class="article-page row justify-center q-my-md">
    <div class="col-12 col-md-8">
      <q-card class="my-card" flat bordered>
        <q-img
            src="https://picsum.photos/800/600"
        />

        <q-card-section>
          <div class="text-overline">23.06.2023</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ selectedPost.title }}</div>
          <div class="text-caption text-grey">
            {{ selectedPost.body }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.article-page {
  min-height: 100vh;
}
</style>

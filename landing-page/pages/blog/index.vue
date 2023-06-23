<script setup lang="ts">
useHead({
  title: 'Blog'
})

const { data: posts } = await useFetch('/api/posts')
</script>

<template>
  <div class="blog-page row q-pa-md">
    <div
        v-for="post in posts"
        :key="post.id"
        class="col-12 col-md-3 q-pa-sm"
    >
      <PostCard
          :id="post.id"
          :title="post.title"
          :body="post.body"
      />
    </div>
  </div>
</template>

<style scoped>
.blog-page {
  min-height: 100vh;
}
</style>

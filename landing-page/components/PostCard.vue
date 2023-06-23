<script lang="ts" setup>
interface PostCardProps {
  id: string
  date: string
  title: string
  content: string
}

defineProps<PostCardProps>()

const goToArticle = () => {
  navigateTo(`/blog/123`)
}
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-img
        src="https://picsum.photos/800/600"
    />

    <q-card-section>
      <div class="text-overline">23.06.2023</div>
      <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
      <div class="text-caption text-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space />
      <q-btn flat color="secondary" label="Więcej" @click="goToArticle" />
    </q-card-actions>
  </q-card>
</template>

<style scoped>

</style>

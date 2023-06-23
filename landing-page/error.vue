<template>
  <div class="error-page row column text-center items-center">
    <div class="col">
      <h6 class="h6 text-h6 font-bold text-center">BŁĄD</h6>
      <span class="font-light">Wystąpił błąd pracujemy już nad tym...</span>
    </div>
    <div class="col">
      <q-btn outline label="Wróć do strony głownej" size="md" @click="handleError"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-page {
  background-color: #ebebeb;
  height: 100vh;
}
</style>

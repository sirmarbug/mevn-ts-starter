<script setup lang="ts">
interface PricingCardProps {
  name: string
  price: number
  features: string[]
}
defineProps<PricingCardProps>()
</script>
<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h5 text-center">{{ name }}</div>
    </q-card-section>

    <q-separator inset />

    <q-card-section class="text-center">
      <span class="text-h6">${{ price }}/month</span>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <p
          v-for="(feature, index) in features"
          :key="index"
      >
        ✔ {{ feature }}
      </p>
    </q-card-section>

    <q-card-section class="text-center">
      <q-btn outline color="primary" label="SIGN UP" />
      <p class="text-weight-light">No Credit Card Required</p>
    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>

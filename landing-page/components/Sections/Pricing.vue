<script lang="ts" setup>
const pricingCards = ref([
  {
    name: 'FREE',
    price: 0,
    features: [
        '1 active project',
        '100mb space',
        '∞ collaborators'
    ]
  },
  {
    name: 'PROFESSIONAL',
    price: 8,
    features: [
      '5 active project',
      '10GB space',
      '∞ collaborators'
    ]
  },
  {
    name: 'TEAM',
    price: 22,
    features: [
      '25 active project',
      '25GB space',
      '∞ collaborators'
    ]
  }
])
</script>

<template>
  <section class="section-features q-pa-md">
    <div class="row column">
      <div class="col-sm-12 col-md-6 text-center">
        <h2 class="h2 text-h2 font-bold">The Pricing Plan</h2>
        <p>Reinforce the reason why people use your product. Lead into the value of each plan before they proceed with their choice.</p>
      </div>
      <div class="row justify-center">
        <div
            v-for="(item, index) in pricingCards"
            :key="index"
            class="col-sm-12 col-md-2 q-pa-md"
        >
          <PricingCard
            :name="item.name"
            :price="item.price"
            :features="item.features"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 text-center">
        <p>All plans include the following features as a standard of our product.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-features {
  background-color: #fff;
}
</style>

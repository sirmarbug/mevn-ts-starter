<script lang="ts" setup>
</script>

<template>
  <section class="section-features q-pa-md">
    <div class="row column">
      <div class="col-sm-12 col-md-6 text-center">
        <h2 class="h2 text-h2 font-bold">The Pricing Plan</h2>
        <p>Reinforce the reason why people use your product. Lead into the value of each plan before they proceed with their choice.</p>
      </div>
      <div class="row justify-center">
        <div class="col-sm-12 col-md-2 q-pa-md">
          <PricingCard/>
        </div>
        <div class="col-sm-12 col-md-2 q-pa-md">
          <PricingCard/>
        </div>
        <div class="col-sm-12 col-md-2 q-pa-md">
          <PricingCard/>
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

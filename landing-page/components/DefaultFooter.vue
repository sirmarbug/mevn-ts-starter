<script lang="ts" setup>
const email = ref<string>('')
</script>

<template>
  <q-footer class="q-pa-md">
    <div class="row justify-around">
      <div class="col">
        <div class="row column">
          <div class="col q-pb-md">
            <span class="h6 text-h6">ABOUT US</span>
          </div>
          <div class="col">
            <span>A short description of what your company is all about. This could be a mission statement or tagline.</span>
          </div>
          <div class="col">
            <span>© 2018 Insert Name Here. All rights reserved</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row column">
          <div class="col q-pb-md">
            <span class="h6 text-h6">LOCATION</span>
          </div>
          <div class="col">
            <span>000 West Oak Avenue,</span>
          </div>
          <div class="col">
            <span>City Name, State 00000, Country</span>
          </div>
          <div class="col">
            <span>info(at)unbounce.com</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row column">
          <div class="col q-pb-md">
            <span class="h6 text-h6">SUBSCRIBE</span>
          </div>
          <div class="col">
            <span>Sign up if you want to stay up to date and recieve notifications.</span>
          </div>
          <div class="col">
            <q-input outlined v-model="email" dense>
              <template v-slot:append>
                <q-btn round color="secondary" size="sm"><IconsSend/></q-btn>
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<style scoped>

</style>

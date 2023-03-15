<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView title="Dashboard" :path="['Dashboard']"> </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Witaj, Mariusz</span>
              <p class="text-body-1">
                Jesteś zalogowany do platformy. Poznaj jej wszystkie możliwości i wykorzystaj je w
                swoim projeckie.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

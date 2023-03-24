<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { count, logs } = storeToRefs(counter)
const { decrement, increment, reset } = counter
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView title="Store" :path="['Store']"> </TitleView>
          </v-col>
        </v-row>
        <!--COUNTER-->
        <v-row>
          <v-col cols="12">
            <SectionTitle title="Counter"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6 d-flex justify-center align-center">
              <v-container>
                <v-row no-gutters class="mb-8">
                  <v-col
                    cols="12"
                    sm="6"
                    offset-sm="3"
                    class="d-flex justify-space-around align-center"
                  >
                    <v-btn icon flat size="small" color="secondary" @click="decrement">
                      <v-icon icon="mdi-minus" size="x-large"></v-icon>
                    </v-btn>
                    <span class="text-h1">{{ count }}</span>
                    <v-btn icon flat size="small" color="secondary" @click="increment">
                      <v-icon icon="mdi-plus" size="x-large"></v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-btn variant="flat" color="error" @click="reset">Reset</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <!--LOGS-->
        <v-row>
          <v-col cols="12">
            <SectionTitle title="Logs"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6 d-flex justify-center align-center">
              <v-container>
                <v-row no-gutters>
                  <v-col v-for="(log, index) in logs" :key="index" cols="12" class="mb-4">
                    {{ log.date }} - {{ log.type }}
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

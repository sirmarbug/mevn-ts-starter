<template>
  <v-app>
    <v-layout full-height>
      <v-main class="d-flex justify-center align-center">
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="6" offset-sm="3">
              <v-card class="elevation-0 rounded-xl py-12 px-6">
                <slot></slot>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import ChatWrapper from './components/ChatWrapper/ChatWrapper.vue'
import ChatInput from './components/ChatInput/ChatInput.vue'
import { useChatStore } from '@/stores/chat'
import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue'

const chatStore = useChatStore()
const { isConnection } = storeToRefs(chatStore)
const { start, stop } = chatStore

const connectionHandle = () => {
  start()
}

const disconnectionHandle = () => {
  stop()
}

onUnmounted(() => {
  stop()
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView title="Websocket" :path="['Websocket']" actions>
              <template #actions>
                <v-btn
                  flat
                  color="error"
                  class="mr-4"
                  :disabled="!isConnection"
                  @click="disconnectionHandle"
                >
                  Rozłącz
                </v-btn>
                <v-btn flat color="primary" :disabled="isConnection" @click="connectionHandle">
                  Połącz
                </v-btn>
              </template>
            </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6 d-flex flex-column">
              <ChatWrapper />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6 d-flex flex-column">
              <ChatInput />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>

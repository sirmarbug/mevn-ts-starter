<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import ChatWrapper from './components/ChatWrapper/ChatWrapper.vue'
import ChatInput from './components/ChatInput/ChatInput.vue'
import { useChatStore } from '@/stores/chat'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted } from 'vue'
import { initChat } from '@/websockets'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const chatStore = useChatStore()
const { isConnection } = storeToRefs(chatStore)
const { start, stop } = chatStore

const connectionHandle = () => {
  start()
}

const disconnectionHandle = () => {
  stop()
}

onMounted(() => {
  initChat()
})

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
                  {{ t('common.connect') }}
                </v-btn>
                <v-btn flat color="primary" :disabled="isConnection" @click="connectionHandle">
                  {{ t('common.disconnect') }}
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

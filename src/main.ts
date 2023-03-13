import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from '@/locales'
import vuetify from '@/plugins/vuetify'

// Global styles
import '@/styles/index.scss'

import App from './App.vue'

createApp(App).use(createPinia()).use(router).use(vuetify).use(i18n).mount('#app')

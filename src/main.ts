import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from '@/locales'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(createPinia()).use(router).use(vuetify).use(i18n).mount('#app')

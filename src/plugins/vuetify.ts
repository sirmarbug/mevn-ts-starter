import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import type { ThemeDefinition } from 'vuetify/dist/vuetify'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f5f5f5',
    surface: '#FFFFFF',
    primary: '#28965a',
    'primary-darken-1': '#2a6041',
    secondary: '#495159',
    'secondary-darken-1': '#384047',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light
    }
  }
})

export default vuetify

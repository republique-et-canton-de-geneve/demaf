import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import router from './router/index.js'
import App from './App.vue'

async function bootstrap() {
  // Démarrage MSW en développement ou en mode pages (build mocké)
  if (import.meta.env.DEV || import.meta.env.VITE_MOCK === 'true') {
    const { worker } = await import('./mocks/browser.js')
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` },
    })
  }

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: '#1976D2',
          },
        },
        light: {
          colors: {
            primary: '#1976D2',
          },
        },
      },
    },
  })

  createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
}

bootstrap()

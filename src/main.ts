import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/i18n'
import router from '@/router'
import App from '@/App.vue'

import '@/scss/default.scss';

createApp(App)
  .use(createPinia())
  .use(i18n)
  .use(router)
  .mount('#app')

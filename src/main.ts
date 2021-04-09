import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import { Auth0Plugin } from '@/auth/auth'
import { domain, clientId } from '../auth.config.json'
import en from '@/localisation/en.json'
import nl from '@/localisation/nl.json'

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})
Vue.config.productionTip = false

const languages = {
  en: en,
  nl: nl
}

const messages = Object.assign(languages)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

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
import VueRouter, { Route } from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as SignalR from '@microsoft/signalr'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)
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

declare module 'vue/types/vue' {
  interface Vue {
    $route: Route;
    $router: VueRouter;
  }
}

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

const connection = new SignalR.HubConnectionBuilder().withUrl('https://localhost:5001/wss/BattleHub').build()
connection.on('receiveBattleOutcome', args => console.log(args))
connection.start().then(() => console.log('SignalR innit m8'))

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

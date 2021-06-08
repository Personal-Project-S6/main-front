<template>
  <v-app>
    <v-card
    color="grey lighten-4"
    flat
    height="5%"
    tile
    >
    <v-toolbar dense elevation="0" color="#D6DBDF">
      <v-toolbar-title>
        <v-btn href="/">{{ $t("general.app_title") }}</v-btn>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn v-if="!$auth.isAuthenticated" icon @click="login">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn v-else icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon @click="toggleLanguage">
        <v-icon>mdi-flag</v-icon>
      </v-btn>
    </v-toolbar>
    </v-card>
    <br>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as SignalR from '@microsoft/signalr'

@Component({
  name: 'App'
})
export default class App extends Vue {
  login () {
    console.log('Logging in')
    this.$auth.loginWithRedirect({})
  }

  logout () {
    console.log('Logout')
    this.$auth.logout({
      returnTo: window.location.origin
    })
  }

  toggleLanguage () {
    if (this.$i18n.locale === 'en') {
      this.$i18n.locale = 'nl'
    } else {
      this.$i18n.locale = 'en'
    }
  }

  mounted () {
    this.setupSignalR()
  }

  setupSignalR () {
    const connection = new SignalR.HubConnectionBuilder().withUrl('https://localhost:5001/wss/BattleHub').build()
    connection.on('receiveBattleOutcome', args => {
      this.$store.state.battleReports.push(args)
      console.log(this.$store.getters.g_battleReports)

      if (localStorage.getItem('battleReports')) {
        const currentReports = JSON.parse(localStorage.getItem('battleReports') || '{}')
        for (const item in this.$store.getters.g_battleReports) {
          currentReports.push(item)
          localStorage.setItem('battleReports', JSON.stringify(currentReports))
        }
      } else {
        localStorage.setItem('battleReports', JSON.stringify(this.$store.getters.g_battleReports))
      }

      console.log(localStorage.battleReports)
    })
    connection.start().then(() => console.log('SignalR connected'))
  }
}
</script>

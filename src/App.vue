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
import { AxiosRequestConfig } from 'axios'

@Component({
  name: 'App'
})
export default class App extends Vue {
  login () {
    console.log('Logging in')
    this.$auth.loginWithRedirect({})
    this.setupToken()
  }

  logout () {
    console.log('Logout')
    this.$auth.logout({
      returnTo: window.location.origin
    })
    localStorage.clear()
    this.$store.state.mission = {}
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

  async setupToken () {
    await this.$http
      .post(
        'https://teaguemm.eu.auth0.com/oauth/token',
        {
          client_id: 'tP3aqhMyfLzdJgu1cb2ODReo3Pk4CQ4g',
          client_secret:
            'vpCL5Ec5P1E1HCC-IgWXw3FXQ7XasmSXm_X7PFylFXP7MgebG8j52FSPHXT7TNuK',
          audience: 'personal-gateway.teaguemm.com',
          grant_type: 'client_credentials'
        },
        { headers: { 'content-type': 'application/json' } }
      )
      .then((response) => {
        const token = response.data
        console.log('Look here: ')
        console.log(token)
        localStorage.setItem('access_token', token.access_token)
      })
  }

  setupSignalR () {
    console.log(`Gateway: ${process.env.VUE_APP_GATEWAY}`)
    const connection = new SignalR.HubConnectionBuilder().withUrl(`${process.env.VUE_APP_GATEWAY}/wss/BattleHub`, { accessTokenFactory: () => localStorage.getItem('access_token')! }).build()
    connection.on('receiveBattleOutcome', args => {
      console.log('Response: ')
      console.log(args)
      // If there are already reports stored
      // if (localStorage.getItem('battleReports')) {
      //   const currentItems = JSON.parse(localStorage.getItem('battleReports') || '{}')
      //   const updatedReports = [{}]
      //
      //   for (const item in currentItems) {
      //     updatedReports.push(item)
      //   }
      //   updatedReports.push(args)
      //
      //   localStorage.setItem('battleReports', JSON.stringify(updatedReports))
      // } else {
      //   const report = { args }
      //   localStorage.setItem('battleReports', JSON.stringify(report))
      // }
      //
      // console.log(localStorage.battleReports)
    })
    connection.start().then(() => console.log('SignalR connected'))
  }
}
</script>

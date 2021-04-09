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
        <v-btn href="/">{{ $t("localisation.general.app_title") }}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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
}
</script>

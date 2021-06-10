<template>
  <v-snackbar v-model="snackbar" :timeout="5000">
    This website uses cookies. I promise they won't steal your data!
    <v-btn color="blue" text @click="toggleValues">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'CookieConsent'
})
export default class CookieConsent extends Vue {
  private snackbar = true;

  mounted () {
    if (localStorage.getItem('hasAcceptedCookies') !== null) {
      this.snackbar = false
    }
  }

  toggleValues () {
    this.snackbar = false
    localStorage.setItem('hasAcceptedCookies', 'true')
  }
}
</script>

<style scoped>

</style>

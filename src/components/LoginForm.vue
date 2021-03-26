<template>
  <div>
    <v-card flat>
      <v-card-title primary-title>
        <h4>Login</h4>
      </v-card-title>
      <v-form>
      <div v-if="!$auth.isAuthenticated">
        <v-text-field name="Username" placeholder="Username"></v-text-field>
        <v-text-field name="Password" placeholder="Password" type="password"></v-text-field>
        <br>
        <v-card-actions >
          <v-btn primary large block @click="login">Login</v-btn>
        </v-card-actions>
      </div>
      <v-card-actions>
        <v-btn primary large block @click="logout">Logout</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'LoginForm'
})

export default class LoginForm extends Vue {
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
}
</script>

<style scoped>

</style>

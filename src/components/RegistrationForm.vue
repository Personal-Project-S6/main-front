<template>
  <div>
    <v-card flat>
      <v-card-title primary-title>
        <h4>Register</h4>
      </v-card-title>
      <v-form>
        <v-text-field prepend-icon="person" name="Username" placeholder="Username"></v-text-field>
        <v-text-field prepend-icon="lock" name="Email" placeholder="E-mail" type="email"></v-text-field>
        <v-text-field prepend-icon="lock" name="Password" placeholder="Password" type="password"></v-text-field>
        <v-text-field prepend-icon="lock" name="ConfirmPassword" placeholder="Confirm password" type="password"></v-text-field>
        <br>
        <v-card-actions>
          <v-btn primary large block>Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'RegistrationForm'
})

export default class RegistrationForm extends Vue {
}
</script>

<style scoped>

</style>

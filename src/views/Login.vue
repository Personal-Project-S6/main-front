<template>
  <div>
    <login-form></login-form>
    <router-link to="/register">No account?</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LoginForm from '@/components/LoginForm.vue'

@Component({
  name: 'LoginRegistration',
  components: { LoginForm }
})

export default class Login extends Vue {
}
</script>

<style scoped>

</style>

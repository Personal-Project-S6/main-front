<template>
 <div>
   <registration-form></registration-form>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RegistrationForm from '@/components/RegistrationForm.vue'

@Component({
  name: 'Register',
  components: { RegistrationForm }
})

export default class Register extends Vue {
}
</script>

<style scoped>

</style>

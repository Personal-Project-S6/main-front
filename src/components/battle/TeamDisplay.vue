<template>
  <div max-width="30%">
    <v-container>
      <v-row justify="space-around" align="center">
        <v-col>
          <v-avatar color="primary" size="56"></v-avatar>
          <v-spacer/>
          <v-avatar color="primary" size="56"></v-avatar>
          <v-spacer/>
          <v-avatar color="primary" size="56"></v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'TeamDisplay'
})
export default class TeamDisplay extends Vue {
}
</script>

<style scoped>
</style>

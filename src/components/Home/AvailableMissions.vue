<template>
  <div>
    <v-card style="margin: auto auto">
      <v-card-title>{{ $tc("battle.mission", 2) }}</v-card-title>
      <v-list three-line>
        <template v-for="(item, index) in missions">
          <v-list-item :key="index" @click="setMission(item)">
            <v-list-item-avatar>
              <v-img :src="item.MissionImage"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.Name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.Description"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
  name: 'AvailableMissions'
})
export default class AvailableMissions extends Vue {
  private missions = {}

  mounted () {
    this.getNewMissions()
  }

  async getNewMissions () {
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
        { headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080' } }
      )
      .then((response) => {
        const token = response.data
        console.log('Look here: ')
        console.log(token)
        localStorage.setItem('access_token', token.access_token)
        const options = {
          headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }

        this.$http.get(`${this.$store.getters.g_gateway}/Mission`, options).then((response) => {
          console.log(this.missions = response.data)
        })
      })
  }

  setMission (mission: any) {
    this.$store.state.mission = mission
    this.$router.push('Battle')
  }
}
</script>

<style scoped>
html {
  overflow: hidden;
}

.v-card {
  display: flex;
  flex-direction: column;
}

.v-list-item {
  flex-grow: 1;
  overflow: auto;
}
</style>

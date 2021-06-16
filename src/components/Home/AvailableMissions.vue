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
    const options = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    }

    this.$http.get(`${process.env.VUE_APP_GATEWAY}/api/Mission`, options).then((response) => {
      console.log(this.missions = response.data)
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

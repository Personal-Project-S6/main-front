<template>
  <div>
    <!-- TODO: FIX ENEMY ROSTER NOT BEING DISPLAYED TILL A CHARACTER IS ADDED TO PLAYER ROSTER-->
    <v-container>
      <v-row>
        <v-col>
          <v-btn v-on:click="sendOnMission">Send on mission</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <team-display :is-enemy-team="false" :roster="playerRoster"></team-display>
        </v-col>
        <v-col>
          <team-display :is-enemy-team="true"></team-display>
        </v-col>
      </v-row>
      <v-row>
        <player-battle-screen-collection @characterAdded="this.addCharacter"></player-battle-screen-collection>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TeamDisplay from '@/components/battle/TeamDisplay.vue'
import PlayerBattleScreenCollection from '@/components/battle/PlayerBattleScreenCollection.vue'

@Component({
  name: 'Battle',
  components: { PlayerBattleScreenCollection, TeamDisplay }
})
export default class Battle extends Vue {
  private playerRoster = [{}]

  addCharacter (object) {
    if (['dexterity', 'strength', 'intellect'].some(x => x === object.Type) && this.playerRoster.length < 6) {
      this.playerRoster.push(object)
    }
  }

  sendOnMission () {
    if (this.playerRoster.length === 6) {
      console.log('Sent on mission')
      this.$store.state.mission.PlayerRoster = this.playerRoster
      console.log(this.$store.state.mission)
      this.$http.post(`${this.$store.getters.g_gateway}/Mission`, this.$store.getters.g_mission).then((response) => {
        console.log(response.data)
      })
    } else {
      alert('Player roster must contain 6 characters.')
    }
  }
}
</script>

<style scoped>

</style>

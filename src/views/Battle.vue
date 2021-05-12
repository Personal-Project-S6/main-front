<template>
  <div>
    <!-- TODO: FIX ENEMY ROSTER NOT BEING DISPLAYED TILL A CHARACTER IS ADDED TO PLAYER ROSTER-->
    <v-container>
      <v-row>
        <v-col>
          <team-display :is-enemy-team="false" :roster="playerRoster"></team-display>
        </v-col>
        <v-col>
          <team-display :is-enemy-team="true" :roster="this.$store.getters.g_enemyTeam"></team-display>
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
import { Component, Prop } from 'vue-property-decorator'
import TeamDisplay from '@/components/battle/TeamDisplay'
import PlayerBattleScreenCollection from '@/components/battle/PlayerBattleScreenCollection'

@Component({
  name: 'Battle',
  components: { PlayerBattleScreenCollection, TeamDisplay }
})
export default class Battle extends Vue {
  private playerRoster = []

  addCharacter (object) {
    if (['dexterity', 'strength', 'intellect'].some(x => x === object.Type) && this.playerRoster.length < 6) {
      this.playerRoster.push(object)
    }
  }
}
</script>

<style scoped>

</style>

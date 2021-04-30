<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <team-display :is-enemy-team="false" :roster="playerRoster"></team-display>
        </v-col>
        <v-col>
          <team-display :is-enemy-team="true" :roster="enemyRoster"></team-display>
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
  @Prop()
  private selectedMission = {}

  private playerRoster = [{}]

  addCharacter (object: Record<string, unknown>) {
    console.log(object)
    if (['dexterity', 'strength', 'intellect'].some(x => x === object.Type)) {
      this.playerRoster.push(object)
      console.log(object)
    }
  }
}
</script>

<style scoped>

</style>

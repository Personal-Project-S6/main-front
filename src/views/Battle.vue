<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <team-display :is-enemy-team="false" :roster="testPlayerRoster"></team-display>
        </v-col>
        <v-col>
          <team-display :is-enemy-team="true" :roster="testPlayerRoster"></team-display>
        </v-col>
      </v-row>
      <v-row>
        <player-battle-screen-collection></player-battle-screen-collection>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TeamDisplay from '@/components/battle/TeamDisplay'
import PlayerBattleScreenCollection from '@/components/battle/PlayerBattleScreenCollection'

@Component({
  name: 'Battle',
  components: { PlayerBattleScreenCollection, TeamDisplay }
})
export default class Battle extends Vue {
  testPlayerRoster =
  [
    {
      name: 'TestPlayerCharName1',
      character_avatar: 'https://previews.123rf.com/images/drawkman/drawkman1709/drawkman170900317/85465273-cartoon-monster-face-vector-halloween-orange-cool-monster-avatar-with-wide-smile-prints-design-for-t.jpg'
    },
    {
      name: 'TestPlayerCharName2',
      character_avatar: 'https://previews.123rf.com/images/drawkman/drawkman1709/drawkman170900317/85465273-cartoon-monster-face-vector-halloween-orange-cool-monster-avatar-with-wide-smile-prints-design-for-t.jpg'
    },
    {
      name: 'TestPlayerCharName3',
      character_avatar: 'https://previews.123rf.com/images/drawkman/drawkman1709/drawkman170900317/85465273-cartoon-monster-face-vector-halloween-orange-cool-monster-avatar-with-wide-smile-prints-design-for-t.jpg'
    },
    {
      name: 'TestPlayerCharName4',
      character_avatar: 'https://previews.123rf.com/images/drawkman/drawkman1709/drawkman170900317/85465273-cartoon-monster-face-vector-halloween-orange-cool-monster-avatar-with-wide-smile-prints-design-for-t.jpg'
    },
    {
      name: 'TestPlayerCharName5',
      character_avatar: 'https://previews.123rf.com/images/drawkman/drawkman1709/drawkman170900317/85465273-cartoon-monster-face-vector-halloween-orange-cool-monster-avatar-with-wide-smile-prints-design-for-t.jpg'
    },
    {
      name: 'TestPlayerCharName6',
      character_avatar: 'https://previews.123rf.com/images/drawkman/drawkman1709/drawkman170900317/85465273-cartoon-monster-face-vector-halloween-orange-cool-monster-avatar-with-wide-smile-prints-design-for-t.jpg'
    }
  ]
}
</script>

<style scoped>

</style>

<template>
  <div max-width="30%">
    <v-card max-width="30%" style="margin: auto auto">
      <v-card-title v-if="isEnemyTeam">{{ $t("battle.enemy_team") }}</v-card-title>
      <v-card-title v-else>{{ $t("battle.player_team") }}</v-card-title>
      <v-list three-line>
        <template v-for="item in roster">
          <v-list-item :key="item.name">
            <v-list-item-avatar>
              <v-img :src="item.character_avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'TeamDisplay'
})
export default class TeamDisplay extends Vue {
  @Prop()
  private isEnemyTeam: boolean;

  @Prop()
  private roster: [];

  mounted () {
    console.log('Is enemy team? ' + this.isEnemyTeam)
  }
}
</script>

<style scoped>
</style>

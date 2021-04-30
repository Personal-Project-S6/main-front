<template>
  <div>
      <v-card style="margin: auto auto">
        <v-card-title v-if="isEnemyTeam">{{ $t("battle.enemy_team") }}</v-card-title>
        <v-card-title v-else>{{ $t("battle.player_team") }}</v-card-title>
        <v-list three-line>
          <template v-for="item in roster">
            <v-hover v-slot="{ hover }" :key="item.Name">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="item.ImageUrl"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.Name"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.Description"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action v-if="!isEnemyTeam">
                  <v-btn @click="removeCharacter(item)" color="grey lighten-2" v-if="hover">
                    {{ $t("battle.remove_character") }}
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-hover>
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

  removeCharacter (object: never) {
    const index = this.roster.indexOf(object, 0)
    if (index > -1) {
      this.roster.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>

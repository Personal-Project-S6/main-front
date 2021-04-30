<template>
  <!-- TODO: FIX SCALING (sm-md-lg)-->
  <div>
    <v-container v-if="playerRoster">
      <v-row>
        <v-col v-for="item in playerRoster" :key="item.name" :sm="1" :md="2" :lg="4">
          <v-hover v-slot="{ hover }">
            <v-card>
              <v-container>
                <v-row>
                  <v-col cols="9">
                    <v-card-title>{{ item.Name }}</v-card-title>
                    <v-card-actions float="right">
                      <v-btn v-if="hover" color="grey lighten-2">
                        {{ $t("battle.add_character") }}
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col cols="3">
                    <v-img :src="item.ImageUrl" max-height="200px" max-width="200px"></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'PlayerBattleScreenCollection'
})
export default class PlayerBattleScreenCollection extends Vue {
  private playerRoster = []

  mounted () {
    this.getPlayerRoster()
  }

  getPlayerRoster () {
    this.$http.get(`${this.$store.getters.g_gateway}/Character`).then((response) => {
      console.log(this.playerRoster = response.data)
    })
  }
}
</script>

<style scoped>

</style>

<template>
<!-- TODO: FIX SCALING (sm-md-lg)-->
<div>
  <v-container v-if="playerRoster">
    <v-row>
      <v-col v-for="item in playerRoster" :key="item.Name" :sm="1" :md="2" :lg="4">
        <v-hover v-slot="{ hover }">
          <v-card>
            <v-container>
              <v-row>
                <v-col cols="9">
                  <v-card-title>{{ item.Name }}</v-card-title>
                  <v-card-actions float="right">
                    <v-btn v-if="hover" @click="onPressAdd(item)" color="grey lighten-2">
                      {{ $t("battle.add_character") }}
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col cols="3">
                  <v-img :src="item.ImageUrl"></v-img>
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

  onPressAdd (object) {
    this.$emit('characterAdded', object)
  }

  mounted () {
    this.getPlayerRoster()
  }

  getPlayerRoster () {
    const options = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    }

    this.$http.get(`${process.env.VUE_APP_GATEWAY}/api/Character`, options).then((response) => {
      this.playerRoster = response.data
    })
  }
}
</script>

<style scoped>

</style>

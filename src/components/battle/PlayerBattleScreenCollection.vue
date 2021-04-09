<template>
  <!-- TODO: FIX SCALING (sm-md-lg)-->
  <div>
    <v-container>
      <v-row>
        <v-col v-for="item in testPlayerRoster" :key="item" :sm="1" :md="2" :lg="4">
          <v-card>
            <v-container>
              <v-row>
                <v-col cols="9">
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-actions float="right">
                    <v-btn color="grey lighten-2">
                      Add
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col cols="3">
                  <v-img :src="item.character_avatar" max-height="100px" max-width="100px"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'PlayerBattleScreenCollection'
})
export default class PlayerBattleScreenCollection extends Vue {
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

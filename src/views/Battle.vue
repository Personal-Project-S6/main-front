<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <team-display></team-display>
        </v-col>
        <v-col>
          <team-display></team-display>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TeamDisplay from '@/components/battle/TeamDisplay'

@Component({
  name: 'Battle',
  components: { TeamDisplay }
})
export default class Battle extends Vue {
}
</script>

<style scoped>

</style>

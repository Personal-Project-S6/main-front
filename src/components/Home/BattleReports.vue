<template>
  <div>
    <v-card max-width="60%" style="margin: auto auto">
      <v-card-title>{{ $tc("battle.reports") }}</v-card-title>
      <v-list three-line>
        <template v-for="(item, index) in reports">
          <v-list-item :key="index">
            <v-list-item-content>
              <v-list-item-title>Result</v-list-item-title>
              <v-list-item-subtitle v-html="item.result"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'

@Component({
  name: 'BattleReports'
})
export default class AvailableMissions extends Vue {
  private reports;

  mounted () {
    this.updateReports()
  }

  updateReports () {
    this.reports = JSON.parse(localStorage.battleReports)
    console.log('Got reports')
    console.log(this.reports)
  }
}
</script>

<style scoped>
html {
  overflow: hidden;
}
</style>

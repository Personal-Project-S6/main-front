<template>
  <div>
    <team-display></team-display>
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

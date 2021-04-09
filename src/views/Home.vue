<template>
  <div>
    <available-missions></available-missions>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AvailableMissions from '@/components/battle/AvailableMissions.vue'

@Component({
  components: { AvailableMissions }
})
export default class Home extends Vue {}
</script>

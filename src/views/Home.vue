<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <store-highlights></store-highlights>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StoreHighlights from '@/components/StoreHighlights.vue'

@Component({
  components: { StoreHighlights }
})
export default class Home extends Vue {}
</script>

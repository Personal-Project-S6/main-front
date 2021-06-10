<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <available-missions></available-missions>
        </v-col>
        <v-col cols="6">
          <battle-reports></battle-reports>
        </v-col>
      </v-row>
    </v-container>
    <cookie-consent></cookie-consent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AvailableMissions from '@/components/Home/AvailableMissions.vue'
import BattleReports from '@/components/Home/BattleReports.vue'
import CookieConsent from '@/components/Home/CookieConsent.vue'

@Component({
  components: { CookieConsent, BattleReports, AvailableMissions }
})
export default class Home extends Vue {}
</script>

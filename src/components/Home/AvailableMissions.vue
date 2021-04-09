<template>
  <div>
    <v-card max-width="60%" style="margin: auto auto">
      <v-card-title>{{ $tc("battle.mission", 2) }}</v-card-title>
      <v-list three-line>
        <template v-for="item in items">
          <v-list-item :key="item.name" @click="$router.push('Battle')">
            <v-list-item-avatar>
              <v-img :src="item.mission_avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
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

@Component({
  name: 'AvailableMissions'
})
export default class AvailableMissions extends Vue {
  items = [
    {
      id: 'TestMissionId1',
      name: 'Test Mission 1',
      description: 'Test Mission 1 description',
      mission_avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      id: 'TestMissionId2',
      name: 'Test Mission 2',
      description: 'Test Mission 2 description',
      mission_avatar: 'https://www.w3schools.com/w3images/avatar6.png'
    },
    {
      id: 'TestMissionId2',
      name: 'Test Mission 2',
      description: 'Test Mission 2 description',
      mission_avatar: 'https://www.w3schools.com/w3images/avatar6.png'
    },
    {
      id: 'TestMissionId1',
      name: 'Test Mission 1',
      description: 'Test Mission 1 description',
      mission_avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      id: 'TestMissionId2',
      name: 'Test Mission 2',
      description: 'Test Mission 2 description',
      mission_avatar: 'https://www.w3schools.com/w3images/avatar6.png'
    }
  ]
}
</script>

<style scoped>
html {
  overflow: hidden;
}

.v-card {
  display: flex;
  flex-direction: column;
}

.v-list-item {
  flex-grow: 1;
  overflow: auto;
}
</style>

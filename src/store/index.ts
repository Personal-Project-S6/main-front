import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '',
    userName: '',
    gateway: 'https://localhost:5001/api',
    enemyTeam: {}
  },
  mutations: {
    userId (state, v) {
      state.userId = v
    },
    userName (state, v) {
      state.userName = v
    }
  },
  getters: {
    g_userId (state) {
      return state.userId
    },
    g_userName (state) {
      return state.userName
    },
    g_gateway (state) {
      return state.gateway
    },
    g_enemyTeam (state) {
      return state.enemyTeam
    }
  },
  actions: {
  },
  modules: {
  }
})

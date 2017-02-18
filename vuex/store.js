import Vue from 'vue'
import Vuex from 'vuex'
import mutations from'./mutations'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

export default new Vuex.store({
  state,
  mutations
})
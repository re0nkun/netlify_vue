import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    showDatas(state) {
      return state.data
    }
  },
  mutations: {
    increment(state, payload) {
      // console.log(payload)
      state.data = payload
    }
  },
  actions: {
    getApi(context) {
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        // console.log(response.data.bpi)
        context.commit('increment', response.data.bpi)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
})
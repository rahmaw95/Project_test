import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let path = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc'
const state = {
  isShowSidebar: false,
  loading: false,
  comicsList: []
}

const getters = {
  isLoading: (state) => {
    return state.loading
  },
  comicsList: (state) => {
    return state.comicsList
  }
}

const mutations = {
  setLoading (state, value) {
    state.loading = value
  },
  setComicsList (state, value) {
    state.comicsList = value
  }
}

const actions = {
  getComicsList ({commit}) {
    console.log('calling action getComicsList()')
    commit('setLoading', true)
    axios.get(`${path}`)
      .then(function (response) {
        console.log('response ', response.data.data.result)
        commit('setLoading', false)
        let array = response.data.data.results
        array.sort(function (a, b) {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        })
        commit('setComicsList', array)
      })
      .catch(function (error) {
        commit('setLoading', false)
      })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

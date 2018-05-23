import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {isEmpty} from 'lodash'

Vue.use(Vuex)

let state = {
  data: []
}

const mutations = {
  RECEIVE_CHARACTERS (state, {characters}) {
    state.data = isEmpty(characters) ? [] : characters
    return characters
  },
  RECEIVE_COMICS (state, {comics}) {
    state.data = isEmpty(comics) ? [] : comics
    return comics
  }
}

const actions = {
  async FETCH_CHARACTERS ({commit}, name) {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${name}&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc`
    const {data} = await axios.get(url)
    commit('RECEIVE_CHARACTERS', {characters: data.data.results})
  },

  // https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&titleStartsWith=hulk&apikey=07ce49deb4db58c5c0b0b32a65a9f157
  async FETCH_COMICS ({commit}, title) {
    const url = `https://gateway.marvel.com/v1/public/comics?ts=1&titleStartsWith=${title}&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc`
    const {data} = await axios.get(url)
    commit('RECEIVE_COMICS', {comics: data.data.results})
  }
}

const getters = {
  characters: (state) => state.data.map((data) => {
    return {
      name: data.name,
      url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
      image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      description: data.description === '' ? 'No description listed for this character.' : data.description
    }
  }),
  comics: (state) => state.data.map((data) => {
    console.log('data: ', data.creators)
    return {
      title: data.title,
      filter: data.format,
      creators: data.creators.items[1] ? data.creators.items[1].name : data.creators.items[0],
      url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
      image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      description: data.description === '' ? 'No description listed for this comics.' : data.description
    }
  })
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

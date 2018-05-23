import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const ApiKey = 'your_api_key_here' // replace with NYT API key
const SECTIONS = 'home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world'

function buildUrl (url) {
  return 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/nytimes-api.json'
}

const route = new Vuex.Store({
  NYTBaseUrl,
  ApiKey,
  SECTIONS,
  buildUrl
})

export default route

<template>
  <div>
    <div class="search-character__form position">
      <form>
        <div class="jumbotron">
          <div class="ui action input" style="width: 80%">
            <input v-model="searchText"
              placeholder="search title, type"
              type="text"
              required style="width:100%" />
          </div>
        </div>
      </form>
    </div>
    <div style="text-align:center;margin:0 auto; font-size:16px; padding-top:20px">
      showing <span class="highlight" >{{filteredList.length}}</span> comics marvel
    </div>
    <div class="ui comics-list cards" style="width: 80%">
      <div v-for="(comic, index) in filteredList" :key="comic.NO" class="ui card fadeIn-animation">
        <div class="image">
          <img :src="comic.image" />
        </div>
        <div class="content">
          <div class="header"
            v-html="highlightText(comic.title, searchText)">
          </div>
          <div>
            <label class="label" v-html="highlightText(comic.type, searchText)">
            </label>
          </div>
          <div>
            <b>Creator : </b>
            <span v-html="highlightText(comic.creators, searchText)"></span>
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            <a target="_blank" :href="comic.url">
              <button class="ui icon red tiny button">
                  More Info
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins'

export default {
  name: 'comicsList',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
      searchText: '',
      showingPos: []
    }
  },
  computed: {
    comicsList () {
      return this.$store.getters.comicsList
    },
    filteredList() {
      let self = this
      return self.comicsList.filter(post => {

        let title = post.title && post.title.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        let type = post.type && post.type.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        let creactors = post.creactors && post.creactors.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        return title || type || creactors
      })
    }
  },
  methods: {
    highlightText: function (words, query) {
      function pregQuote (str) {
        return (str.trim() + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1")
      }
      var iQuery = new RegExp(pregQuote(query), 'ig')
      if (!words) return 1;
      return words.toString().replace(iQuery, function (matchedTxt, a, b) {
        return ('<span class=\'highlight\'>' + matchedTxt + '</span>')
      })
    }
  },
  mounted () {
    this.$store.dispatch('getComicsList')
  }
}

</script>
<style>
.comics-list.cards {
  justify-content: center;
  margin: 2em auto;
}

.comics-list.cards .image {
    position: relative;
    width: 100%;
    height: 264px;
    overflow: hidden;
}

.comics-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}

.ui.card, .ui.cards > .card {
  width: 364px;
}
.label{
  background: #4d4d4d; color:#fff; padding:2px 8px; font-size:10px
}
.highlight {
  color: rgb(180, 46, 46);
}
.position{
  padding: 2em auto;
  text-align: center
}
.jumbotron{
  background: none !important;
  border-radius: 0;
  position: absolute;
  top: 169px;
  width: 100%;
}
</style>

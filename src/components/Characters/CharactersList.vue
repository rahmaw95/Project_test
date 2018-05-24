<template>
  <div>
    <div class="search-character__form position">
      <form>
        <div class="jumbotron">
          <div class="ui action input" style="width: 80%">
            <input v-model="searchText"
              placeholder="search name characters"
              type="text"
              required style="width:100%" />
          </div>
        </div>
      </form>
    </div>
    <div style="text-align:center;margin:0 auto; font-size:16px; padding-top:20px">
      showing <span class="highlight" >{{filteredList.length}}</span> characters marvel
    </div>
    <div class="ui characters-list cards" style="width: 80%">
      <div v-for="(character, index) in filteredList" :key="character.NO" class="ui card fadeIn-animation">
        <div class="image">
          <img :src="character.image" />
        </div>
        <div class="content">
          <div class="header"
            v-html="highlightText(character.name, searchText)">
          </div>
          <div>
            <span v-html="highlightText(character.desc, searchText)"></span>
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            <a target="_blank" :href="character.url">
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
  name: 'charactersList',
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
    charactersList () {
      return this.$store.getters.charactersList
    },
    filteredList() {
      let self = this
      return self.charactersList.filter(post => {

        let name = post.name && post.name.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        let desc = post.desc && post.desc.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        return name || desc
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
    this.$store.dispatch('getCharactersList')
  }
}

</script>
<style>
.characters-list.cards {
  justify-content: center;
  margin: 2em auto;
}

.characters-list.cards .image {
    position: relative;
    width: 100%;
    height: 264px;
    overflow: hidden;
}

.characters-list.cards .image img {
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

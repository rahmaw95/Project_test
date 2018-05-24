<template>
  <div>
    <div class="search-character__form position">
      <form>
        <div class="jumbotron">
          <h2></span>Comic Marvel</h2>
          <div class="ui action input">
            <!-- <div class="sourcefilter">
              <select v-on:change="filterChanged" class="ui dropdown selects" v-model="comics">
                <option selected disabled> -- choose -- </option>
                <option v-for="comic in comics" v-bind:value="comic.id">{{comic.format}}</option>

              </select>
            </div> -->
            <input v-model="searchText"
              placeholder="Comics Name"
              type="text"
              required style="width:100%" />
            <!-- <button class="ui icon red button">
              <i class="search icon"></i>
            </button> -->
          </div>
        </div>
      </form>
    </div>
    <div style="text-align:center;margin:0 auto">
      showing <span class="highlight" >{{filteredList.length}}</span> comics marvel
    </div>
    <div class="ui comics-list cards">
      <div v-for="(comic, index) in filteredList" :key="comic.NO" class="ui card fadeIn-animation">
        <div class="image">
          <img :src="comic.image" />
        </div>
        <div class="content">
          <div class="header"
            v-html="highlightText(comic.title, searchText)">
          </div>
          <div>
            <label class="label" v-html="highlightText(comic.format, searchText)">
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

        // let image = '${post.thumbnail.path}.${post.thumbnail.extension}'

        let type = post.format && post.format.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        let creactor = post.creactors && post.creactors.toLowerCase()
          .includes(self.searchText && self.searchText.toLowerCase())

        return title || type || creactor
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
  color: #0096D9;
}
.position{
  padding: 2em auto;
  text-align: center
}
</style>

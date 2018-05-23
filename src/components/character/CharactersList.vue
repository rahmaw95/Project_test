<template>
  <div class="ComicList">
    <div class="container">
      <ul class="media-list" v-for="lists in processedPosts">
        <li class="media" v-for="list in lists">
          <div class="media-left">
            <a v-bind:href="list.url" target="_blank">
              <img class="media-object" v-bind:src="list.image">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="list.url" target="_blank">{{list.title}}</a></h4>
            <p>{{list.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ComicList',
  props: ['results'],
  data () {
    return {
      lists: []
    }
  },
  methods: {
    updateResults: function (title) {
      let url = 'https://gateway.marvel.com/v1/public/comics?ts=1&titleStartsWith=' + title + '&apikey=07ce49deb4db58c5c0b0b32a65a9f157' + '&hash=9712925550c951d0c12ed920db8bf9dc'
      this.$http.get(url)
       .then(response => {
         this.lists = response.data.data.results;
       });
    }
  },
  computed: {
    processedPosts() {
      let lists = this.results;
      posts.map((list) => {
        return {
          title: list.title,
          filter: list.format,
          creators: list.creators.items[1] ? list.creators.items[1].name : list.creators.items[0],
          url: list.urls[1] ? list.urls[1].url : list.urls[0].url,
          image: `${list.thumbnail.path}.${list.thumbnail.extension}`,
          description: list.description === '' ? 'No description listed for this comics.' : list.description
        }
      })
    }
  },
  created: function () {
    this.updateResults(this.results);
  },
  watch: {
    results: function (val) {
      this.updateResults(val);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media-object {
    width: 128px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
</style>

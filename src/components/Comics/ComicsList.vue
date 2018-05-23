<template>
  <div v-if="!!comics.length" class="ui comics-list cards">
    <div v-for="comic in comics" :key="comic.title" class="ui card fadeIn-animation">
      <div class="image">
        <img :src="comic.image" />
      </div>
      <div class="content">
        <div class="header">{{comic.title}} </div>
        <div>
          <label style="background: #4d4d4d; color:#fff; padding:2px 10px; font-size:10px">{{comic.filter}}</label>
        </div>
        <div>
          <b>Creator : </b>
          <span>{{comic.creators}}</span>
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
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
  name: 'sourcefilter',
  data () {
    return {
      title: '',
      format:''
    }
  },
  methods: {
    comics: function () {
      let url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc'
      this.axios.get(url)
       .then(response => {
         this.comics = response.data.results;
       });
    }
  },
  computed: mapGetters([
    'comics'
  ]),

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
</style>

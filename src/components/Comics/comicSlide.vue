<template>
  <div>
    <carousel
      :per-page="2" :navigate-to="someLocalProperty" mouse-drag="true"
      :navigationEnabled="true"
      navigationNextLabel="<i class='fa fa-chevron-right'></i>"
      navigationPrevLabel="<i class='fa fa-chevron-left'></i>"
    >
      <slide data-name="MySlideName" v-for="comic in filteredList"
        @slideClick="handleSlideClick">
        <img :src="comic.image" alt="" class="img-slide">
      </slide>
    </carousel>
  </div>
</template>

<script>
import mixin from '@/mixins'
import {Carousel, Slide} from 'vue-carousel'

export default {
  name: 'comicsSlider',
  mixins: [mixin],
  data () {
    return {
      results: '',
      slides: 3,
      searchText: '',
      showingPos: []
    }
  },
  computed: {
    comicsSlider () {
      return this.$store.getters.comicsList
    },
    filteredList () {
      let self = this
      return self.comicsSlider.filter((post) => {
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
  mounted () {
    this.$store.dispatch('getComicsList')
  },
  components: {
    Carousel,
    Slide
  }
}

</script>

<style>
.img-slide{
  justify-content: center;
  position: relative;
  width: 100%;
  height: 264px;
  padding-right:20px;
  overflow: hidden;
}
</style>

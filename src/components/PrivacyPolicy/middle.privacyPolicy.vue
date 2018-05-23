<!-- <template>
  <div class="container" id="app">

    <Searchform v-on:sourceChanged="sourceChanged"></Searchform>
    <CharacterList v-bind:result="result"></CharacterList>

  </div>
</template>
<script>
import CharacterList from '../character/CharactersList'
import Searchform from '../character/SearchCharacterForm'
export default {
  name: 'app',
  components: {
    CharacterList,
    Searchform
  },
  data () {
    return {
      result: ""
    }
  },
  methods: {
    sourceChanged: function (result) {
      this.result = result;
    }
  }
}
</script>
<style>
  #app {
    padding-top: 20px
  }
</style> -->

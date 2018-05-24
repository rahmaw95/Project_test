<template>
  <div class="container" id="app">

    <CharactersList v-on:sourceChanged="sourceChanged"></CharactersList>
    <SearchCharacterform v-bind:source="source"></SearchCharacterform>

  </div>
</template>
<script>
import CharactersList from '../character/CharactersList'
import SearchCharacterform from '../character/SearchCharacterform'
export default {
  name: 'app',
  components: {
    CharactersList,
    SearchCharacterform
  },
  data () {
    return {
      source: ""
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source;
    }
  }
}
</script>
<style>
  #app {
    padding-top: 20px
  }
</style>

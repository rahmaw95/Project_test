<template>
  <section id="home" class="home home-fullscreen background">
    <vue-particles color="#dedede"></vue-particles>
    <div class="video-overlay"></div>
    <div class="home-title text-opacity">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="home-title" v-for="home in home">
              <p class="font-title" v-text="home.title"></p>
              <p class="font-desc" v-text="home.desc" style="text-transform: lowercase">
                <div class="space-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      home: [{
        title: "IT'S ALL STAR WARS ON MARVEL'S THE PULL LIST",
        desc: "PREVIEW THIS WEEK'S NEW MARVEL COMICS",
        link: '/about'
      }]
    }
  }
}

</script>

<style scoped>
.background {
  margin-top: 0px;
  height: 600px;
}
</style>

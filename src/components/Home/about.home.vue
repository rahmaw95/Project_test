<template>
  <section style="padding:100px 0;background:#fafafa">
    <div class="container">
      <div class="row" >
        <div class="col-md-4 col-sm-12 box-wedo" v-for="about in about">
          <div class="wedo-content">
            <h1 class="titlee text-left" style="color:#4d4d4d;font-weight:600" v-text="about.title"></h1>
            <p style="font-size:18px">preview this week's new marvel comics</p>
            <div class="space-40"></div>
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="about-header">
            <comicSlide></comicSlide>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import comicSlide from '../Comics/comicSlide'
export default {
  data () {
    return {
      about: [
        {
          title: 'BEST SELLING DIGITAL COMICS',
          image: require('../../assets/images/background/about.jpg')
        }
      ],
    }
  },
  components: {
    comicSlide
  }
}

</script>

<style scoped>
.about-header{
  position:relative;
  height:0px;
  padding:0;
}
.content-image{
  width:100%;
  position:absolute;
  margin:45px -30px
}
.titlee{
  color:#000;
  font-size: 33px;
}
</style>

<template>
  <section style="padding:100px 0;background:#fafafa">
    <div class="container">
      <div class="row" v-for="about in about">
        <div class="col-md-6 col-sm-12 box-wedo">
          <div class="wedo-content">
            <p class="desc text-left" style="color:#4d4d4d" v-text="about.desc"></p>

            <div class="space-40"></div>
            <a v-bind:href="about.link" class="btn-portofolio"> Learn More</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="about-header">
            <img v-bind:src="about.image" class="content-image">
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
      about: [
        {
          desc: 'We are committed to providing high-quality products and services to our customers to help our costomers business grow. We believe that our consistency and commitment have made us become one of trusted IT Company in Indonesia and make our customers happy.',
          link: 'about-us.html',
          image: require('../../assets/images/background/about.jpg')
        }
      ]
    }
  }
}

</script>

<style scoped>
.about-header{
  position:relative;
  background-color: white;
  height:450px;
  padding:0
}
.content-image{
  width:100%;
  position:absolute;
  margin:45px -30px
}
.dec{
  color:#000;
}
</style>

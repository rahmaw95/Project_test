<template>
  <section id="services" style="margin:50px auto 80px auto">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8 col-xs-12">
          <div class="title-section text-center">
            <h2 class="title text-center">Our Services</h2>
            <p class="desc text-center">A range of services adapted to your needs</p>
            <div style="margin-top: 100px"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-12 section-reponsive" v-for="service in services">
          <div class="iconbox center square">
            <div class="box-header">
              <i v-bind:class="service.class" aria-hidden="true" style="font-size:32px"></i>
              <div class="box-title"><a href="#">{{service.name}}</a></div>
            </div>
            <div class="box-content">
              {{service.desc}}
            </div>
          </div>
          <!-- /.iconbox -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          name: 'Mobile App Development',
          class: 'fa fa-mobile',
          desc: 'Powerful Layout with Responsive functionality that can be adapted to any screen size.'
        },
        {
          name: 'Web Development',
          class: 'fa fa-globe',
          desc: 'Looks beautiful & ultra-sharp on Retina Displays with Retina Icons, Fonts & Images.'
        },
        {
          name: 'Desktop',
          class: 'fa fa-desktop',
          desc: 'Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.'
        },
        {
          name: 'Web Services',
          class: 'fa fa-laptop',
          desc: 'Optimized code that are completely customizable and deliver unmatched fast performance.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

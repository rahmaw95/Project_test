<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-sm-12 header-box background">
          <div class="bg-overlay">
            <div class="header-content text-center">
              <div class="space-40"></div>
              <h3 class="title">{{$route.params.menu | capitalize}}</h3>
              <p class="desc-breadcrumb">
              <router-link to="/" style="color: #FFF">Home</router-link> / {{$route.params.menu | capitalize}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      let value2 = ''
      let valueX = ''
      let y = []
      for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i].toUpperCase()) {
          value2 = value.slice(i)
          y.push(i)
        }
      }
      if (y.length === 0) {
        value2 = value.slice(1)
      } else {
        for (let i = 0; i < y.length; i++) {
          if (i === 0) valueX = valueX + value.substring(1, y[i]) + ' '
          else valueX = valueX + value.substring(y[i - 1], y[i]) + ' '
        }
      }
      return value.charAt(0).toUpperCase() + valueX + value2
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  .background {
    background-image: url(../../assets/images/1.jpg)
  }
</style>

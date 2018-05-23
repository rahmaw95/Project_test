<template>
  <nav class="navbar fixed-top navbar-toggleable-md navbar-inverse navbar-light bg-inverse nav-bg-opacity mb-4">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand">
        <img src="../../assets/img/gibox_digital.png" class="logo-brand">
      </router-link>
      <div class="navbar-collapse collapse" id="navbarCollapse" aria-expanded="false" style="">
        <ul class="navbar-nav ml-auto w-100 justify-content-end">
          <li class="nav-item link-font" v-for="menu in menus">
            <router-link v-bind:to="menu.link" class="nav-link color-font">{{menu.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    $(document).ready(function () {
      $('.nav-bg-opacity').removeClass('nav-bg-white')
      $(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('.nav-bg-opacity').addClass('nav-bg-white').css('color', 'blue')
          } else {
            $('.nav-bg-opacity').removeClass('nav-bg-white')
          }
        })
      })
    })
    return {
      menus: [
        {
          active: false,
          name: 'About us',
          link: '/aboutUs'
        },
        {
          active: false,
          name: 'Careers',
          link: '/careers'
        },
        {
          active: false,
          name: 'Contact Us',
          link: '/contactUs'
        },
        {
          active: false,
          name: 'Marvel profile',
          link: '/marvelProfile'
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>

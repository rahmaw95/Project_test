<template>
  <section>
    <footer class="footer-bg">
      <div class="container">
        <div class="row" style="padding:0">
          <div class="col-md-6">
            <img src="../../assets/img/marvel-logo.png" class="logo-brand">
          </div>
          <!-- <div class="col-md-6">
            <ul class="social">
              <li>Find us on</li>
              <li v-for="sosMed in sosMeds">
                <a v-bind:href="sosMed.link" target="_blank"><i v-bind:class="sosMed.class" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div> -->
          <div class="col-md-6">
            <div class="space-20"></div>
            <div class="space-20"></div>
            <p style="font-size:12px; color: #bbb; margin-bottom:0" class="text-right">Copyrights © 2018 All Rights Reserved by Marvel.</p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {
      sosMeds: [
        {
          name: 'Instagram',
          link: '#',
          class: 'fa fa-instagram'
        },
        {
          name: 'Facebook',
          link: 'https://www.marvel.com/',
          class: 'fa fa-facebook-official'
        },
        {
          name: 'Twitter',
          link: '#',
          class: 'fa fa-twitter'
        },
        {
          name: 'Linked In',
          link: '#',
          class: 'fa fa-linkedin-square'
        }
      ]
    }
  }
}
</script>

<style>

</style>

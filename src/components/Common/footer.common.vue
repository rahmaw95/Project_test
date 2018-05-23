<template>
  <section>
    <footer class="footer-bg">
      <div class="container">
        <div class="row" style="padding:0">
          <div class="col-md-4">
            <img src="../../assets/img/logogibox-white.png" class="logo-brand">
            <div class="space-20"></div>
            <p style="font-size:14px">Gibox DigitaL is consistency and commitment have made us become one of trusted IT Company.</p>
            <div class="space-20"></div>
            <ul class="social">
              <li>Find us on</li>
              <li v-for="sosMed in sosMeds">
                <a v-bind:href="sosMed.link" target="_blank"><i v-bind:class="sosMed.class" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5 style="font-weight:600">Contact Us</h5>
            <div class="space-20"></div>
            <p style="font-size:14px">
              PT Gibox Digital Asia<br> Menara Batavia Lt.9 Suite 1C,<br> Jl. K.H. Mas Mansyur No.Kav. 126, Karet Tengsin, Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10250
            </p>
            <p style="line-height:1.8; font-size:14px">
              Email : <a href="#" style="color:#fff">giboxdigitalasia@gmail.com</a> <br> Phone : <a href="#" style="color:#fff">021-57939380</a>
            </p>
          </div>
          <div class="col-md-2">
            <ul class="link-rspv">
              <h5 style="font-weight:600">Helpful Link</h5>
              <div class="space-20"></div>
              <li v-for="section1 in sections[0]">
                <router-link v-bind:to="section1.link" style="color: #fff">{{section1.name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <ul>
              <div class="space-40"></div>
              <li v-for="section2 in sections[1]">
                <router-link v-bind:to="section2.link" style="color: #fff">{{section2.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <footer style="background-color: #fff; padding: 5px">
      <div class="container" >
        <div class="row">
          <div class="col-md-6">
            <p style="font-size:12px; color: #bbb; margin-bottom:0">Copyrights © 2017 All Rights Reserved by Gibox Digital.</p>
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
      sections: [
        [
          {
            name: 'About Us',
            link: '/aboutUs'
          },
          {
            name: 'Careers',
            link: '/careers'
          },
          {
            name: 'Contact Us',
            link: '/contactUs'
          }
        ], [
          {
            name: 'Term & Condition',
            link: '/termCondition'
          },
          {
            name: 'Privacy Policy',
            link: '/privacyPolicy'
          }
        ]
      ],
      sosMeds: [
        {
          name: 'Instagram',
          link: '#',
          class: 'fa fa-instagram'
        },
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/PT-Gibox-Digital-Asia-351960705277939/',
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

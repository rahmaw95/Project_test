<template>
  <section style="margin-top:50px">
    <div class="container-fluid" >
      <div class="row justify-content-md-center">
        <div class="col-md-8 col-sm-12" v-for="sect in sects">
          <div class="title-section">
            <h2 class="title" style="line-height:1.4" v-text='sect.title'></h2>
            <p class="desc" v-text='sect.desc'></p>
            <div class="space-30"></div>
          </div>
        </div>
      </div>
      <div class="row" v-for="overview in overviews">
        <div class="col-md-6 col-sm-12 col-xs-12 ">
          <img v-bind:src="overview.image" style="width:100%;" v-bind:class="overview.class" >
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 box-portofolio">
          <div class="about-content">
            <h3 class="title" v-text="overview.title"></h3>
            <div class="space-35"></div>
            <p class="desc text-left" v-text="overview.desc"></p>
          </div>
        </div>
      </div>

      <div class="row" v-for="feature in features">
        <div class="col-md-6 col-sm-12 box-portofolio">
          <div class="about-content">
            <div class="space-35"></div>
            <h3 class="title" v-text="feature.title"></h3>
            <div class="space-20"></div>
            <ul class="desc text-left">
              <li>Pembuatan kasus dengan metadata dan lampiran (foto, dokumen: pdf, word, excel, ppt)</li>
              <li>Edit dan update kasus terkait metadata, status, lampiran, dan hubungan</li>
              <li>Definisi pengguna, kelompok dan peran dengan izin dan tingkat keamanan tertentu</li>
              <li>Kemampuan pencarian berdasarkan status, user , tanggal dan lain-lain</li>
              <li>Interface yang user-friendly</li>
              <li>Semua kegiatan yang dihasilkan baik yang dilakukan oleh pengguna maupun aktivitas yang dilakukan oleh sistem akan direkam dan disimpan untuk audit.</li>
              <li>Kolaborasi antara para investigator</li>
              <li>Workspace pengguna untuk menunjukkan kasus – kasus yang menjadi tugas user</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <img v-bind:src="feature.image" style="width:100%;">
        </div>
      </div>
      <div class="row" v-for="benefit in benefits">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <img v-bind:src="benefit.image" style="width:100%;">
        </div>
        <div class="col-md-6 col-sm-12 box-portofolio">
          <div class="about-content">
            <h3 class="title" v-text="benefit.title"></h3>
            <div class="space-35"></div>
            <ul class="desc text-left">
              <li>Mengurangi biaya dengan menghilangkan biaya kertas dan percetakan, sekaligus mengurangi waktu bagi pengguna untuk menyimpan, mencari dan memelihara kasus.</li>
              <li>Semua kasus mudah diakses di beberapa workstation dan para pengguna dapat berkolaborasi dengan para pengguna lainnya.</li>
              <li>Menyimpan informasi kasus dalam database yang aman.</li>
              <li>Memungkinkan manajemen untuk memiliki gambaran yang menyeluruh tentang kegiatan pengguna dan prosesnya</li>
            </ul>
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
      sects: [
        {
          title: 'Gibox Case',
          desc: 'Lasting change, stakeholders development Angelina Jolie world problem solving progressive. Courageous; social entrepreneurship change; accelerate resolve pursue these aspirations asylum.'
        }
      ],
      overviews: [
        {
          class: 'img-fluid float-sm-right text-right',
          image: require('../../assets/Images/background/case.jpg'),
          title: 'Overview',
          desc: 'Case Management menyediakan fungsi inti untuk manajemen kasus seperti alur kerja, manajemen bukti, pencarian, pengambilan, catatan tambahan, pelaporan dan audit. Hal ini dirancang untuk menggantikan pemakaian kertas yang tidak efisien, dan proses penyimpanan file pada kabinet. Case Management System data membantu menjamin keamanan, integritas dan aksesibilitas informasi kasus'
        }

      ],
      features: [
        {
          class: 'img-fluid float-sm-right text-right',
          image: require('../../assets/Images/background/feature.jpg'),
          title: 'Main Feature'
        }
      ],
      benefits: [
        {
          class: 'img-fluid float-sm-right text-right',
          image: require('../../assets/Images/background/benefit.png'),
          title: 'Benefit'
        }
      ]
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

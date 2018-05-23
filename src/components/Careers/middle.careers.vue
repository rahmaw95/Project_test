<template>
  <section style="padding:100px 0;background:#fafafa">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8 col-sm-12">
          <div class="title-section">
            <h2 class="title" style="line-height:1.4">Join our team !</h2>
            <p class="desc">Work wherever it works for you.</p>
            <div class="space-30"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 border-career" v-for="career in careers">
          <div class="box-blue">
            <h5 class="text-center title" v-text="career.title"></h5>
          </div>
          <div class="box-white">
            <ul>
              <li>2+ years working experience in the field</li>
              <li>Superb knowledge in Node.JS</li>
              <li>Familiarity with React and Electron</li>
              <li>Familiarity with: JavaScript, Type Script, HTML, CMS systems (especially DNN), CSS, C# (especially in writing dnn modules)</li>
              <li>Familiarity with Angular </li>
              <li>Experience with unit testing, GIT and SVN</li>
              <li>Fluent English (spoken/written)</li>
            </ul>
            <div class="col-md-12 text-center">
              <div class="space-30"></div>
              <a href="" class="btn-portofolio text-center">Apply Now</a>
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
      careers: [
        {
          title: 'Front End'
        },
        {
          title: 'Back End'
        },
        {
          title: 'Data Scientist'
        }
      ]
    }
  }
}

</script>

<style scoped>
</style>

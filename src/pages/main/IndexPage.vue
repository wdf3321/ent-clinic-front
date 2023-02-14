<template>
  <!-----------------------------  -->
  <section id="carousel" data-aos="fade-up">
    <div class="">
      <q-carousel
        animated
        v-model="slide"
        arrows
        thumbnails
        infinite
        autoplay="true"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1761&q=80"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://images.unsplash.com/photo-1589279003513-467d320f47eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://images.unsplash.com/photo-1612277795122-9d3c6ca381d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://images.unsplash.com/photo-1631558555832-b845ef77223e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        />
      </q-carousel>
    </div>
  </section>
  <!-- -------------------------- -->
  <section data-aos="zoom-in">
    <div id="info" class="row q-mb-md text-center justify-center items-center">
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="src/assets/syringe.svg" />
            <q-card-section>
              <h4>疫苗注射</h4>
              <h6>預防針接種</h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="src/assets/a6.svg" />
            <q-card-section>
              <h4>減敏治療</h4>
              <h6>過敏原篩檢</h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img class="col-5" ratio="1" src="src/assets/ear.svg" />
            <q-card-section>
              <h4>聽力檢測</h4>
              <h6>助聽器選配</h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="src/assets/7.svg" />
            <q-card-section>
              <h4>三高預防</h4>
              <h6>預防文明病</h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
  <!-- ------------------------------------------ -->
  <section
    class="q-pr-lg q-py-lg"
    style="background: #eee"
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
  >
    <h3>關於我們</h3>
    <div id="info2" class="row q-px-xl">
      <div class="col-md-4 col-xs-12">
        <q-img
          ratio="1"
          src="src/assets/a1.jpg"
        />
      </div>
      <div
        class="col-md-4 col-xs-12 text-center justify-center items-center text-teal-8"
      >
        <h4 class="q-my-xl">泰山耳鼻喉科</h4>
        <h4 class="q-my-xl">台大榮總醫療團隊</h4>
        <h4 class="q-my-xl">照顧你的健康</h4>
        <h4 class="q-my-xl">值得你信賴</h4>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-img
          ratio="1"
          src="src/assets/a2.jpg"
        />
      </div>
    </div>
  </section>
  <!-- ------------------------ -->
  <section
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="500"
  >
    <h3>門診時間</h3>
    <q-row class="justify-center items-center row">
      <q-table
        id="table"
        class="q-mx-xl"
        :rows="rows2"
        :columns="columns2"
        hide-bottom
      ></q-table>
    </q-row>
    <h5 class="text-center q-mx-auto text-teal-8" style="width: 100vw">
      王醫師:🟠 黃醫師:🟢 李醫師:🟤
    </h5>
  </section>
  <!-- -------------------- -->
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)

const columns2 = [
  {
    name: 'name',
    required: true,
    label: '',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: false
  },
  { name: 'mon', label: '一', field: 'mon', sortable: false },
  { name: 'tue', label: '二', field: 'tue', sortable: false },
  { name: 'wed', label: '三', field: 'wed', sortable: false },
  { name: 'thur', label: '四', field: 'thur', sortable: false },
  { name: 'fri', label: '五', field: 'fri', sortable: false },
  { name: 'sat', label: '六', field: 'sat', sortable: false },
  { name: 'sun', label: '日', field: 'sun', sortable: false }
]

const rows2 = [
  {
    name: '8:30-12:00',
    mon: '🟠',
    tue: '🟠',
    wed: '🟢',
    thur: '🟤',
    fri: '🟠',
    sat: '🟠',
    sun: '🟢'
  },
  {
    name: '15:00-18:00',
    mon: '🟢',
    tue: '🟢',
    wed: '🟤',
    thur: '🟢',
    fri: '🟢',
    sat: '🟤',
    sun: '🟢'
  },
  {
    name: '18:30-22:00',
    mon: '🟠',
    tue: '🟠',
    wed: '🟠',
    thur: '🟢',
    fri: '🟠',
    sat: '🟤',
    sun: '🟢'
  }
]
</script>

<style lang="scss">
#info {
  padding: 3rem;
  width: 100vw;
  img {
    max-width: 100%;
  }
  .q-img {
    object-fit: cover;
    border-radius: 50%;
    width: 50%;
  }
}

#info2 {
  min-height: 40vh;
  max-height: 200vh;
  width: 100vw;
  img {
    width: 100%;
    height: 100%;
  }
}
section {
  width: 100vw;
}
.q-table__container {
  min-width: 75%;
  max-width: 100%;
}
.q-carousel {
  width: 100%;
}
#info {
  .q-card {
    border: 1px solid #009688;
    border-radius: 16px;
  }
  .col-md-4 .q-img {
    border-radius: 20px;
  }
}
</style>

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
          v-for="image in images"
          :key="image.id"
          :name="image.id"
          :img-src="image.image"
        />
      </q-carousel>
    </div>
  </section>
  <!-- -------------------------- -->
  <section data-aos="fade-up">
    <div id="info" class="row q-mx-md text-center justify-center items-center">
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="~assets/syringe.svg" />
            <q-card-section>
              <h4>疫苗注射</h4>
              <h6>
                提供小兒、成人等 <br />
                及各式預防針注射
              </h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="~assets/a6.svg" />
            <q-card-section>
              <h4>減敏治療</h4>
              <h6>
                找到明確的過敏原 <br />
                讓您遠離過敏體質
              </h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img class="col-5" ratio="1" src="~assets/ear.svg" />
            <q-card-section>
              <h4>聽力檢測</h4>
              <h6>專業安全聽力檢查<br />提供助聽器可選配</h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-11">
        <q-card class="my-card q-mx-lg" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="~assets/7.svg" />
            <q-card-section>
              <h4>三高預防</h4>
              <h6>提供各大原廠藥物<br />一起守護您的健康</h6>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
  <!-- ------------------------------------------ -->
  <section class="q-pa-lg" style="background: #eee" data-aos="fade-up">
    <h3>關於我們</h3>
    <div id="info2" class="row q-px-md-xl">
      <div class="col-md-4 col-xs-12">
        <q-img ratio="1" src="~assets/a1.jpg" />
      </div>
      <div
        class="col-md-4 col-xs-12 text-center justify-center items-center text-teal-8"
      >
        <div class="text-h4">泰山耳鼻喉科</div>
        <div class="text-h4">台大榮總團隊</div>
        <div class="text-h4">照顧您的健康</div>
        <div class="text-h4">值得您的信賴</div>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-img ratio="1" src="~assets/a2.jpg" />
      </div>
    </div>
  </section>
  <!-- ------------------------ -->
  <section data-aos="fade-up">
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
    <h5 class="text-center q-mx-md-auto text-teal-8" style="width: 100vw">
      王醫師:🟠 黃醫師:🟢 李醫師:🟤
    </h5>
  </section>
  <!-- -------------------- -->
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'src/boot/axios'

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
const images = reactive([])

const getBanner = async () => {
  const data = await api.get('/banner')
  console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    images.push({
      _id: data.data.result[i]._id,
      id: data.data.result[i].id,
      image: data.data.result[i].image
    })
  }
}
getBanner()
</script>

<style lang="scss">
#info {
  margin: auto;
  width: 100%;
  margin-top: 2rem;
  @media (min-width: 1024px) {
    padding: 1rem;
    margin-top: 16px;
    width: 80%;
  }
  .q-card {
    border: 1px solid #009688;
    border-radius: 16px;
    margin-bottom: 32px;
  }
  .col-md-4 .q-img {
    border-radius: 20px;
  }
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
  width: 85%;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  @media (min-width: 1024px) {
    height: 65vh;
  }
}
.q-table__container {
  min-width: 75%;
  max-width: 100%;
}
.q-carousel {
  width: 100%;
}
section {
  width: 100vw;
}
.text-h4 {
  font-weight: 100;
  margin: 2.5rem 0;
  @media (min-width: 1024px) {
    margin: 4rem 0;
  }
}
</style>

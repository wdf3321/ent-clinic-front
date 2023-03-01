<template>
  <section id="firstdr" data-aos="fade-down">
    <h3>醫師介紹</h3>
    <div id="picpic" class="row q-pa-md-xs">
      <div class="col-xs-12 col-md-4 q-pa-md-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img
              src="https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1800&t=st=1675698262~exp=1675698862~hmac=5b3d473f70726df38a7b9abe69d96fd4a3b8720398458f2136e3c551aa0487d9"
            />
            <q-card-section>
              <div class="text-h5">王小明 院長</div>
              <div class="text-h6">
                中華民國耳鼻喉科專科醫師<br />
                台灣小兒耳鼻喉科醫學會會員<br />
                台北榮總耳鼻喉頭頸部總醫師<br />
                台大醫院一般科住院醫師
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img
              class="col-5"
              src="https://img.freepik.com/free-photo/portrait-female-nurse-medical-uniform-pointing-fingers-left-showing-hospital-related-content-healthcare-information-aside-white-background_1258-83537.jpg?w=1800&t=st=1675698296~exp=1675698896~hmac=5af61d8e23bd4e1c7dbe006e219899ea7a124d661b81ac3a11834c486ae2c5b9"
            />
            <q-card-section>
              <div class="text-h5">張小華 醫師</div>
              <div class="text-h6">
                中華民國耳鼻喉科專科醫師<br />
                台灣小兒耳鼻喉科醫學會會員<br />
                台北榮總耳鼻喉頭頸部總醫師<br />
                台北榮總住院醫師
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img
              class="col-5"
              src="https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?w=1800&t=st=1675698325~exp=1675698925~hmac=ce295f5ada8b1778511eecab329cddd1bc229df35fe0d51027c55f7ac9cbf98a"
            />
            <q-card-section>
              <div class="text-h5">李建華 醫師</div>
              <div class="text-h6">
                中華民國耳鼻喉科專科醫師<br />
                台灣耳科醫學會會員<br />
                台北榮總耳鼻喉頭頸部總醫師<br />
                台大醫院住院醫師
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
  <!-- ------------------------------------------- -->
  <section id="indexsection" data-aos="fade-up" style="background: #eee" class="q-pa-md">
    <h3>門診時間</h3>
    <div class="justify-center items-center row">
      <q-table
        id="table"
        class="q-mx-xl-md"
        :rows="rowsdoctor"
        :columns="columns2"
        hide-bottom
      >
      <!-- eslint-disable -->
      <template v-slot:body-cell-mon="props" id="template">
        <q-td>
          <q-img v-if="props.row.mon==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.mon==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.mon==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-tue="props">
        <q-td>
          <q-img v-if="props.row.tue==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.tue==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.tue==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-wed="props">
        <q-td>
          <q-img v-if="props.row.wed==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.wed==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.wed==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-thur="props">
        <q-td>
          <q-img v-if="props.row.thur==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.thur==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.thur==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-fri="props">
        <q-td>
          <q-img v-if="props.row.fri==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.fri==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.fri==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-sat="props">
        <q-td>
          <q-img v-if="props.row.sat==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.sat==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.sat==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-sun="props">
        <q-td>
          <q-img v-if="props.row.sun==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.sun==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.sun==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
    </q-table>
    </div>
    <h5 class="text-center q-mx-md-auto text-teal-8" style="width: 100vw">
      王醫師:<q-img src="~assets/circlea.svg" width="30px" ratio="1"/> 張醫師:<q-img src="~assets/circleb.svg" width="30px" ratio="1"/>  李醫師:<q-img src="~assets/circlec.svg" width="30px" ratio="1"/> 
    </h5>
  </section>
  <!-- ----------------------------------------------- -->
</template>

<script setup>
import { reactive } from 'vue'
import { api } from 'src/boot/axios'

const columns2 = [
  {
    name: 'time',
    required: true,
    align: 'left',
    field: 'time',
    sortable: false
  },
  { name: 'mon', label: '一', field: 'mon', sortable: false, align: 'center' },
  { name: 'tue', label: '二', field: 'tue', sortable: false, align: 'center' },
  { name: 'wed', label: '三', field: 'wed', sortable: false, align: 'center' },
  { name: 'thur', label: '四', field: 'thur', sortable: false, align: 'center' },
  { name: 'fri', label: '五', field: 'fri', sortable: false, align: 'center' },
  { name: 'sat', label: '六', field: 'sat', sortable: false, align: 'center' },
  { name: 'sun', label: '日', field: 'sun', sortable: false, align: 'center' }
]
const rowsdoctor = reactive([])
const getDoctor = async () => {
  const data = await api.get('/doctors')
  console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    rowsdoctor.push({
      time: data.data.result[i].time,
      mon: data.data.result[i].mon,
      tue: data.data.result[i].tue,
      wed: data.data.result[i].wed,
      thur: data.data.result[i].thur,
      fri: data.data.result[i].fri,
      sat: data.data.result[i].sat,
      sun: data.data.result[i].sun

    })
  }
}
getDoctor()

</script>

<style lang="scss">

</style>

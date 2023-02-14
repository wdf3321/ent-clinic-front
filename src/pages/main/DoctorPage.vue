<template>
  <section id="first" data-aos="fade-down">
    <h3>醫師介紹</h3>
    <div id="pic" class="row q-pa-md">
      <div class="col-xs-12 col-md-4 q-pa-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img
              class="col-5"
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
      <div class="col-xs-12 col-md-4 q-pa-lg">
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
      <div class="col-xs-12 col-md-4 q-pa-lg">
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
  <section data-aos="fade-up">
    <h3>門診時間</h3>
    <div class="row justify-center items-center">
      <q-table
        id="table"
        :rows="rows2"
        :columns="columns2"
        hide-bottom
      ></q-table>
    </div>
   <h5 class="text-center q-mx-auto text-teal-8" style="width: 100vw">
    王醫師:🟠 黃醫師:🟢 李醫師:🟤
    </h5>
  </section>
  <!-- ----------------------------------------------- -->
</template>

<script setup>
const columns2 = [
  {
    name: 'name',
    required: true,
    label: '',
    align: 'center',
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
#footer {
  border-top: 5px solid $secondary;
}
.q-card{
border: 1px solid $teal;
border-radius: 20px;
}
#first {
  @media (min-width: 1024px) {
    height: 100vh;
  }
}
</style>

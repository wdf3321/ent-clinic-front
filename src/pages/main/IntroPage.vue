<template>
  <section id="first" data-aos="fade-down">
    <h3>本院特色</h3>
    <div id="pic" class="column q-pa-md justify-center items-center">
      <div class="row">
        <q-img
          class="col-md-5 col-xs-12"
          src="https://img.freepik.com/free-photo/doctor-using-inspection-spatula-examine-patient-throat-ent-doctor-doing-throat-exam-woman-patient-opened-her-mouth-throat-checkup_657921-246.jpg?w=1800&t=st=1675698198~exp=1675698798~hmac=c83264f53caa61f4cbd509404eff99c6c22cb5dbc5dcc6e9248f7aa351a830c6"
        />

        <div class="text-h6 col-md-7 col-xs-12">
          透過探索單一病症的多面向，搭配專業儀器、溫暖仔細問診，提供全面照護式的治療，使求診者真正痊癒，享受健康生活。提供一般門診與特約門診
        </div>
      </div>
      <div class="row reverse-md">
        <q-img
          class="col-md-5 col-xs-12"
          src="https://img.freepik.com/free-photo/close-up-physician-using-otoscope-ear-consultation-with-patient-woman-otologist-checking-infection-with-otolaryngology-instrument-medical-visit-during-coronavirus-pandemic_482257-38496.jpg?w=1800&t=st=1675698107~exp=1675698707~hmac=d12e080aebb239de77bd4d4a76bbc7c509b2cede1ff460946f5dfe2001c83c7f"
        />
        <div class="col-md-7 col-xs-12">
          <div class="text-h6">
            我們希望透過耳鼻喉科的相關專業，仔細探索每個病症的多面向，溫暖地提供全面照護式治療，全然治癒每個生病的身心；讓求診者痊癒，回歸健康生活。
          </div>
        </div>
      </div>
      <div class="row">
        <q-img
          class="col-md-5 col-xs-12"
          src="https://img.freepik.com/free-photo/doctor-otorhinolaryngologist-checking-nose-with-otoscope-patient-hospital-nasal-congestion-sinusitis-allergy-concept_657921-192.jpg?w=1800&t=st=1675698177~exp=1675698777~hmac=981d4c51e3d090b14af74fca22c214e2d72f7bcdc74a8dccba7f13123be461e9"
        />

        <div class="text-h6 col-md-7 col-xs-12">
          超過30年鼻竇炎臨床經驗，於20年前引進推廣脈動式洗鼻療法，並著有多篇洗鼻臨床治療經驗及合作多篇洗鼻研究報告。積極投入鼻竇炎最完善內科療法
        </div>
      </div>
    </div>
  </section>
  <!-- -------------- -->
  <section data-aos="fade-down">
    <h3>如何到達</h3>
    <div class="row justify-center items-center q-pa-xs" id="map">
      <div class="col-xs-12 col-md-6 q-mb-xl q-pa-xs">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5736977893575!2d121.42544693219492!3d25.048537388606263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7c8a31768a7%3A0x49399b4f4a4ea003!2zMjQz5paw5YyX5biC5rOw5bGx5Y2AMTA357ij6YGTMjM3LTIwOQ!5e0!3m2!1szh-TW!2stw!4v1675383785832!5m2!1szh-TW!2stw"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="col-xs-12 col-md-6 q-mb-xl q-pa-md">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="car" label="汽車"></q-tab>
              <q-tab name="walk" label="步行"></q-tab>
              <q-tab name="trans" label="大眾運輸"></q-tab>
            </q-tabs>

            <q-separator></q-separator>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="car">
                <div class="text-h6">開車</div>
                沿明志路行駛十分鐘
              </q-tab-panel>

              <q-tab-panel name="walk">
                <div class="text-h6">步行</div>
                沿明志路行走三十分鐘
              </q-tab-panel>

              <q-tab-panel name="trans">
                <div class="text-h6">大眾運輸</div>
                搭乘機場線至泰山貴和站，並行走十分鐘
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </section>
  <!-- ------------------------------------------- -->
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('car')
</script>

<style lang="scss">
#pic {
  width: 100%;
  .row {
    width: 75%;
    margin-bottom: 50px;
  }
  .q-img {
    border-radius: 16px;
  }
}
.flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}
#first {
  .col-md-7 {
    margin-top: 20px;
    padding: 0 20px;
  }
  @media (min-width: 1024px) {
    .col-md-7 {
      margin: auto;
    }
  }
}
#map {
  max-width: 75%;
  margin: auto;
  .q-card{
  border: 1px solid $teal;
  border-radius: 10px;
  }
}
#footer {
  border-top: 5px solid $secondary;
}
</style>

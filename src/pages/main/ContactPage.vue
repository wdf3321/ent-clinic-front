<template>
  <section data-aos="fade-down">
    <h3>聯絡我們</h3>
    <div class="row justify-center items-center q-pa-xs" id="contact1">
      <div class="col-xs-12 col-md-6 q-mb-xl q-pa-xs">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5736977893575!2d121.42544693219492!3d25.048537388606263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7c8a31768a7%3A0x49399b4f4a4ea003!2zMjQz5paw5YyX5biC5rOw5bGx5Y2AMTA357ij6YGTMjM3LTIwOQ!5e0!3m2!1szh-TW!2stw!4v1675383785832!5m2!1szh-TW!2stw"
          width="90%"
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
  <section data-aos="fade-up">
    <div class="row justify-center items-center" id="contact">
      <!-- <p>地址:新北市泰山區明志路三段887號</p> -->
      <div class="col-md-4 col-xs-12 q-pa-lg">
        <q-card bordered class="my-card mycontact-card text-center">
          <q-card-section>
            <div class="text-h6">我們在哪？</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <q-icon name="home" size="6rem" color="teal-8" class="q-my-xl" />
            <div class="text-h6 q-my-xl">新北市泰山區明志路三段887號</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 q-pa-lg">
        <q-card bordered class="my-card mycontact-card text-center">
          <q-card-section>
            <div class="text-h6">想問甚麼？</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <q-icon name="phone" size="6rem" color="teal-8" class="q-my-xl" />
            <div class="text-h6">admin@gmail.com</div>
            <div class="text-h6 q-my-lg">02-94879487</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 q-pa-lg">
        <q-card bordered class="my-card mycontact-card text-center">
          <q-card-section>
            <div class="text-h6">營業時間？</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <q-icon
              name="schedule"
              size="6rem"
              color="teal-8"
              class="q-my-xl"
            />
            <div class="text-h6">8:30-12:00</div>
            <div class="text-h6 q-my-xs">15:00-18:00</div>
            <div class="text-h6">18:30-22:00</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'src/css/app.scss'
import { ref } from 'vue'
const tab = ref('car')
</script>

<style lang="scss">
#footer {
  border-top: 5px solid $secondary;
}
#contact {
  width: 100%;
  @media (min-width: 1024px) {
    width: 80%;
    margin: auto;
  }
  .q-card {
    border: 1px solid $teal;
    border-radius: 16px;
  }
}
#contact1 {
  width: 75%;
  margin: auto;
  @media (min-width: 1024px) {
  }
}
.mycontact-card {
  height: 400px;
  border-radius: 20px;
  border: 1px solid $primary;
}
</style>

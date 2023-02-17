<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-teal-6 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="medical_services" size="xl" class=""></q-icon>
          <q-btn
            flat
            size="lg"
            to="#"
            class="text-weight-bold"
            style="padding-top: 10px"
            >泰山耳鼻喉科
          </q-btn>
        </q-toolbar-title>

        <q-drawer
          class="lt-md text-center bg-primary"
          show-if-above
          v-model="rightDrawerOpen"
          side="right"
          bordered
        >
          <q-tabs class="lt-md text-white" vertical v-model="tab">
            <q-route-tab name="top" label="首頁" to="/" />
            <q-route-tab name="intro" label="診所介紹" to="/intro" />
            <q-route-tab name="doctor" label="醫師介紹" to="doctor" />
            <q-route-tab name="news" label="最新消息" to="news" />
            <q-route-tab name="contact" label="聯絡我們" to="contact" />

            <q-btn
              to="/login"
              class="bg-orange q-mt-xs"
              text-color="white"
              label="會員登入"
              name="login"
            />
          </q-tabs>
        </q-drawer>
        <q-tabs class="gt-sm" v-model="tab">
          <q-route-tab name="top" label="首頁" to="/" />
          <q-route-tab name="intro" label="診所介紹" to="/intro" />
          <q-route-tab name="doctor" label="醫師介紹" to="doctor" />
          <q-route-tab name="news" label="最新消息" to="news" />
          <q-route-tab name="contact" label="聯絡我們" to="contact" />
        </q-tabs>
        <q-btn
          class="gt-sm q-mx-10 bg-orange text-white"
          to="/login"
          text-color=""
          label="會員登入"
          name="login"
        />
        <q-btn
          flat
          icon="menu"
          @click="toggleRightDrawer"
          class="lt-md q-pt-xs"
          size="md"
        />
      </q-toolbar>
    </q-header>
<!-- -------------------------------------------- -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <div id="footer" class="column justify-center items-center text-center">
      <q-parallax src="~assets/parallax.jpg" :speed="0.75">

        <div class="q-my-md-md q-my-xs text-h5">不知道如何預約嗎？</div>
        <div class="q-my-md-md q-my-xs text-h5">點擊下方按鈕，來加入會員吧！</div>
        <q-btn
          class="q-ma-lg bg-orange q-pa-md"
          to="/register"
          text-color="white"
          label="會員註冊"
          name="login"
          size="22px"
        />
      </q-parallax>
    </div>
    <div id="footer2" class="column text-center justify-center items-center bg-teal-6">
      <q-avatar class="q-ma-md" size="75px">
        <q-icon name="medical_services" size="75px" color="white" />
      </q-avatar>
      <q-btn flat to="/" size="xl" class="q-mx-lg text-weight-bolder text-white"
        >泰山耳鼻喉科
      </q-btn>
      <div class="text-h6 text-white">02-94879487</div>
      <br />
      <div class="row">
        <q-btn
          round
          color="teal"
          size="md"
          icon="alternate_email"
          class="q-mx-lg q-my-xs"
          to="/contact"
        />
        <q-btn
          round
          color="teal"
          size="md"
          icon="send"
          class="q-mx-lg q-my-xs"
          to="/contact"
        />
        <q-btn
          round
          color="teal"
          size="md"
          icon="sms"
          class="q-mx-lg q-my-xs"
          to="/contact"
        />
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ref } from 'vue'
import { useArticleStore } from 'src/stores/articles'
const article = useArticleStore()
const tab = ref('top')
const rightDrawerOpen = ref(false)
article.getArticles()

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
AOS.init()
</script>

<style lang="scss">
.q-toolbar {
  height: 80px;
}

#footer {
  color: #fff;
  width: 100%;
  h4 h6 {
    backdrop-filter: hue-rotate(180deg);
  }
}
#footer2 {
  width: 100%;
}
.q-parallax {
  position: relative;
  .q-btn {
    width: 150px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

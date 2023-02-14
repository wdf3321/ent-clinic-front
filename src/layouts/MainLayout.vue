<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-teal-6 text-white">
      <q-toolbar>
        <q-toolbar-title>
<q-icon name="medical_services" size="xl"></q-icon>
          <q-btn flat to="/" size="lg" class="text-weight-bolder">泰山耳鼻喉科 </q-btn>
        </q-toolbar-title>

        <q-drawer
          class="lt-md text-center"
          show-if-above
          v-model="rightDrawerOpen"
          side="right"
          bordered
        >
          <q-tabs class="lt-md text-black" vertical v-model="tab">
            <q-route-tab name="top" label="首頁" to="/" />
            <q-route-tab name="intro" label="診所介紹" to="/intro" />
            <q-route-tab name="doctor" label="醫師介紹" to="doctor" />
            <q-route-tab name="news" label="最新消息" to="news" />
            <q-route-tab name="contact" label="聯絡我們" to="contact" />

            <q-btn
              color="secondary"
              to="/login"
              text-color="white"
              label="會員登入"
              name="login"
            />
          </q-tabs>
        </q-drawer>
        <q-tabs class="gt-sm" v-model="tab">
          <q-route-tab
            v-if="(login = false)"
            name="login"
            label="登入"
            to="/"
          />
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
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
          class="lt-md"
        />
      </q-toolbar>
    </q-header>
<!-- cyan cyan10 -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <div id="footer" class="column justify-center items-center">
      <q-parallax src="src/assets/parallax.jpg" :speed="0.75">
        <h4>
          Lorem ipsum dolor sit,<br />
          Lorem ipsum dolor sit,
        </h4>

        <h6>02-94879487</h6>
        <q-btn
          class="q-mb-xl"
          padding="lg"
          color="primary"
          to="/login"
          text-color="white"
          label="預約/查詢"
          name="login"
          size="15px"
        />
      </q-parallax>
    </div>
    <div id="footer2" class="column text-center justify-center items-center" >
      <q-avatar class="q-ma-md" size="75px">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"  />
      </q-avatar>
      <q-btn flat to="/" size="xl" class="q-mx-lg  text-weight-bolder text-white">泰山耳鼻喉科 </q-btn>
      <br />
      <div class="row">
        <q-btn round color="teal" size="md" icon="alternate_email" class="q-mx-lg q-my-xs" to="/contact"/>
        <q-btn round color="teal"  size="md" icon="send" class="q-mx-lg q-my-xs" to="/contact"/>
        <q-btn round color="teal"  size="md" icon="sms" class="q-mx-lg q-my-xs" to="/contact"/>
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
#footer2{
width: 100%;
background: $secondary;
}
</style>

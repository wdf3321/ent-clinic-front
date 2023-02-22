<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-teal-6 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          泰山耳鼻喉科 | 使用者
        </q-toolbar-title>
        <q-spacer></q-spacer>
        <q-span>歡迎您，{{ user.name }} </q-span>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              :to="menuItem.a"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-teal-6 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="medical_services" size="xl" class=""/>
        </q-toolbar-title>
        <q-fab
          color="teal"
          icon="keyboard_arrow_up"
          direction="up"
          class="q-ml-lg"
        >
          <q-fab-action color="teal" text-color="white" icon="home" to="/" />
          <q-fab-action
            color="teal"
            text-color="white"
            icon="logout"
            @click="logout"
          />
        </q-fab>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
//
const $q = useQuasar()
const router = useRouter()
const drawer = ref(false)
const miniState = ref(true)
const user = useUserStore()
const users = storeToRefs(user)
if (users.isLogin.value === false) {
  router.push('/login')
  $q.notify({
    color: 'red-4',
    textColor: 'white',
    icon: 'report',
    message: '請先登入'
  })
}
function toggleLeftDrawer () {
  drawer.value = !drawer.value
}

const logout = async () => {
  await user.logout()
  router.push('/')
}
const menuList = [
  {
    icon: 'home',
    label: '使用者',
    separator: false,
    a: '/user'
  },
  {
    icon: 'edit',
    label: '會員編輯',
    separator: false,
    a: '/user/edit'
  },
  {
    icon: 'book_online',
    label: '我要預約',
    separator: false,
    a: '/user/reserve'
  },
  {
    icon: 'error',
    label: '預約查詢',
    separator: false,
    a: '/user/see'
  }
]
</script>

<style lang="scss">

</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-teal text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> {{ $t('maintitle') }}</q-toolbar-title>
        <q-spacer> </q-spacer>
        <q-span>{{ $t('hi') }}，{{ user.name }} </q-span>
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
                {{ $t(menuItem.label) }}
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-teal text-white">
      <q-toolbar>
        <q-toolbar-title>
          wdf3321 © 2023
        </q-toolbar-title>
        <q-fab
          color="primary"
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
          <q-fab-action
            color="teal"
            text-color="white"
            icon="fa-solid fa-j"
            @click="$i18n.locale='ja-JP'"
          />
          <q-fab-action
            color="teal"
            text-color="white"
            icon="fa-solid fa-a"
            @click="$i18n.locale='en-US'"
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
// import { useI18n } from 'vue-i18n'

// ------------------------------------------------------------------------------------------------
// eslint-disable-nextline
// const { t } = useI18n()
const $q = useQuasar()
const user = useUserStore()
const users = storeToRefs(user)
const router = useRouter()

if (users.isAdmin.value === false) {
  router.push('/login')
  $q.notify({
    color: 'red-4',
    textColor: 'white',
    icon: 'report',
    message: '你沒有權限'
  })
}
const drawer = ref(false)
const miniState = ref(true)
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
    label: 'admin',
    separator: false,
    a: '/admin'
  },
  {
    icon: 'face',
    label: 'useradmin',
    separator: false,
    a: '/admin/user'
  },
  {
    icon: 'book_online',
    label: 'reserveadmin',
    separator: false,
    a: '/admin/reserve'
  },
  {
    icon: 'article',
    label: 'articleadmin',
    separator: false,
    a: '/admin/article'
  },
  {
    icon: 'settings',
    label: 'limitadmin',
    separator: false,
    a: '/admin/limit'
  },
  {
    icon: 'view_carousel',
    label: 'banneradmin',
    separator: false,
    a: '/admin/banner'
  },
  {
    icon: 'view_carousel',
    label: 'doctoradmin',
    separator: false,
    a: '/admin/doctor'
  }
]
</script>

<style lang="scss">

</style>

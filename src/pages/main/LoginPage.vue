<template>
  <div id="sm" class="row q-pa-xs justify-center text-center reverse-md">
    <div
      id="login"
      class="text-center col-xs-12 col-md-6 q-mb-xl"
      data-aos="fade-left"
    >
      <h5>登入</h5>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          outlined
          type="text"
          v-model="form.account"
          label="帳號"
          hint="請輸入帳號"
          lazy-rules
          :rules="[(val) => (val && val.length >= 4) || '最少4位數以上']"
        />
        <q-input
          outlined
          type="password"
          v-model="form.password"
          label="密碼"
          hint="請輸入密碼"
          lazy-rules
          :rules="[(val) => (val && val.length >= 4) || '最少4位數以上']"
        />
        <div>
          <q-btn
            @submit="login"
            label="送出"
            type="submit"
            color="primary"
            :loading="loading"
          />
          <q-btn
            label="重寫"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
    <div class="col-xs-12 col-md-6 q-mb-xl" data-aos="fade-right">
      <h4>註冊帳號可以?</h4>
      <h5>1.享受更多福利</h5>
      <h5>2.了解更多福利</h5>
      <q-btn
        id="register1"
        label="我要註冊"
        type="button"
        color="primary"
        to="/register"

      />
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, reactive } from 'vue'
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const $q = useQuasar()
const user = useUserStore()
const loading = ref(false)
// --------------
const form = reactive({
  account: '',
  password: ''
})
// ------------------
if (user.role === 1 || user.isAdmin === true) {
  router.push('/admin')
} else if (user.isLogin === true && user.role === 0) {
  router.push('/user')
} else {
  router.push('/login')
}

const accept = ref(false)
const login = async () => {
  await user.login(form)
}
// const logout = async () => {
//   await user.logout()
// }
const onSubmit = async () => {
  if (form.account && form.password !== null) {
    loading.value = true
    await login()
    loading.value = false
    if (user.role === 1 || user.isAdmin === true) {
      router.push('/admin')
      loading.value = false
    } else if (user.isLogin === true && user.role === 0) {
      router.push('/user')
      loading.value = false
    } else {
      router.push('/login')
    }
  } else {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '輸入錯誤'
    })
  }
}

function onReset () {
  form.name = ''
  form.account = ''
  form.password = ''
  form.phone = ''
  accept.value = false
}
</script>

<style lang="scss">
#register1 {
  margin-top: 2rem;
  width: 100px;
  height: 70px;
}
#sm {
  width: 100vw;
  margin: 50px 0;
}
#login {
  height: 50vh;
  width: 500px;
  background: #eeeeee;
  padding: 20px;
  border: 5px solid #eeeeee;
  border-radius: 5%;
  @media (max-width: 1024px) {
    height: 55vh;
  }
  .q-form{
  width: 100%;
  }
}
</style>

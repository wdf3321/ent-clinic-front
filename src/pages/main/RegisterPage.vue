<template>
  <div id="sm" class="row q-pa-md justify-center text-center reverse-md">
    <div
      class="text-center col-xs-12 col-md-6"
      id="register"
      data-aos="fade-right"
    >
      <h5>註冊</h5>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          outlined
          type="text"
          v-model="form.name"
          label="姓名"
          hint="請輸入姓名"
          lazy-rules
          :rules="[(val) => (val && val.length >= 2) || '請輸入全名']"
        />
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
        <q-input
          outlined
          type="tel"
          v-model="form.phone"
          label="手機"
          hint="請輸入手機號碼"
          lazy-rules
          :rules="[(val) => (val && val.length >= 10) || '請輸入正確手機號碼']"
        />
        <q-checkbox v-model="accept" label="我同意註冊新帳號" />
        <div>
          <q-btn
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
    <div class="col-xs-12 col-md-6 q-mb-xl" data-aos="fade-left">
      <h4>註冊帳號可以?</h4>
      <h5>1.享受更多福利</h5>
      <h5>2.了解更多福利</h5>
      <q-btn
        id="register1"
        label="去登入"
        type="button"
        color="primary"
        to="/login"
      />
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, reactive } from 'vue'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const $q = useQuasar()
// --------------------------
const form = reactive({
  name: '',
  account: '',
  password: '',
  phone: ''
})
// -----------------------
const accept = ref(false)
const loading = ref(false)
const onSubmit = async () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '你必須同意申請'
    })
    return
  }
  try {
    loading.value = true
    await api.post('/users', form)
    loading.value = false
    await $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '創建成功，請登入'
    })
    router.push('/login')
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'info',
      message: error.message
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
  margin-top: 50px;
}
#register {
  height: 80vh;
  width: 500px;
  background: #eee;
  padding: 20px;
  border-radius: 5%;
  @media (max-width: 1024px) {
    height: 80vh;
  }
  .q-form {
    width: 100%;
  }
}
</style>

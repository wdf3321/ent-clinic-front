<template>
  <div class="column justify-center items-center q-mt-md">
    <q-avatar size="200px" color="secondary" text-color="white" class="q-mb-xl"  >
      <img src="https://source.boringavatars.com/beam/256/$%7Baccount.value%7D?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff">
    </q-avatar>
    <section class="text-center">
        <q-input
          outlined
          type="text"
          v-model="form.name"
          label="姓名"
          lazy-rules
          :rules="[(val) => (val && val.length >= 2) || '請輸入全名']"
        />
        <q-input
          outlined
          type="text"
          v-model="form.account"
          label="帳號"
          lazy-rules
          :rules="[(val) => (val && val.length >= 4) || '最少4位數以上']"
        />
        <q-input
          outlined
          type="password"
          v-model="form.password"
          label="密碼"
          lazy-rules
          :rules="[(val) => (val && val.length >= 4) || '最少4位數以上']"
        />
        <q-input
          outlined
          type="tel"
          v-model="form.phone"
          label="手機"
          lazy-rules
          :rules="[(val) => (val && val.length > 9) || '請輸入正確手機號碼']"
        />

          <q-btn label="儲存" @click="onSubmit" color="primary" />
        </section>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user'
import { reactive } from 'vue'
import { useQuasar } from 'quasar'
import { apiAuth } from 'src/boot/axios'// api,

const $q = useQuasar()
const user = useUserStore()
const form = reactive({
  name: '',
  account: '',
  phone: '',
  password: ''
})

const getUser = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    form.name = data.result.name
    form.account = data.result.account
    form.phone = data.result.phone
    form.password = data.result.password
    user._id = data.result._id
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '取得成功'
    })
  } catch (error) {
    console.log(error)
  }
}
const onSubmit = async () => {
  try {
    console.log(form)
    await apiAuth.patch(`/users/${user._id}`, form)
    await $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '修改成功'
    })
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'info',
      message: error.message
    })
  }
}
getUser()
</script>

<style lang="scss">

</style>

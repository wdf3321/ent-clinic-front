<template>
  <section>
  <div class="column justify-center items-center q-mt-md">
    <q-avatar size="200px" color="secondary" text-color="white" class="q-mb-xl"  >
      <img src='https://source.boringavatars.com/beam/256/$%7B$%7D?{{user.name}}colors=ffabab,ffdaab,ddffab,abe4ff,d9abff'>
    </q-avatar>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md text-center">
        <q-input
          outlined
          type="text"
          v-model="form.name"
          label="姓名"
          lazy-rules
        />
        <q-input
          outlined
          type="text"
          v-model="form.account"
          label="帳號"
          lazy-rules
        />
        <q-input
          outlined
          type="tel"
          v-model="form.phone"
          label="手機"
          lazy-rules
        />

      </q-form>
  </div>
  </section>
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user'
import { reactive } from 'vue'
import { useQuasar } from 'quasar'

const user = useUserStore()

const $q = useQuasar()

const form = reactive({
  name: user.name,
  account: user.account,
  phone: user.phone
})

const getUser = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    form.name = data.result.name
    form.account = data.result.account
    form.phone = data.result.phone
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
getUser()
</script>

<style lang="scss">

section{
width: 75%;
margin: auto;
.q-form{
width: 100%;
}
}
</style>

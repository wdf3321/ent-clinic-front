<template>
  <section id="useradmin">
    <div class="q-pa-md text-center">
      <q-table
        :title="$t('useradmin')"
        :rows="rows"
        :columns="columns"
        row-key="name"
        selection="single"
        v-model:selected="selected"
      >
        <template v-slot:body-cell-image="props">
        <q-td style="width:10px;">
          <q-img :src="`https://source.boringavatars.com/beam/${props.row.account}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`" height="70px" width="70px">
          </q-img>
        </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md text-center column row-xs justify-center">
      <q-btn
        v-if="selected[0]"
        icon="edit"
        label="修改"
        @click="promptOpen"
        class="q-ma-xl"
        color="teal"
      />
      <q-btn
        v-if="selected[0]"
        icon="delete"
        label="刪除"
        @click="deleteUser"
        class="q-ma-xl"
        color="teal"
      />
    </div>
    <div v-if="!selected[0]" class="q-pa-md text-center column row-xs">
      <q-input
        outlined
        v-model="form.search"
        label="搜尋"
        stack-label
        style="margin: auto; width: 400px; margin-bottom: 32px"
      />
    </div>
    <div
      v-if="!selected[0]"
      class="q-pa-md text-center column row-xs justify-center"
    >
      <q-btn
        icon="search"
        label="搜尋"
        @click="searchName"
        class="q-mr-md-xl q-my-md"
        color="primary"
      />
      <q-select
        outlined
        v-model="form.select"
        :options="options"
        label="搜尋類別"
        id="option"
      />
    </div>
    <div class="row justify-center">
      <q-btn
        icon="reply"
        label="返回"
        class="q-mt-xl"
        @click="getAllUser"
        color="teal"
      />
    </div>
  </section>

  <!-- ------------------------------------------------------------------------------ -->
  <q-dialog v-model="prompt" persistent>
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">id</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline v-model="selected[0].id" readonly />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">名字</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline v-model="selected[0].name" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">帳號</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline v-model="selected[0].account" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">手機</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline v-model="selected[0].phone" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">權限:管理員:1 使用者:0</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline v-model="selected[0].role" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="取消" v-close-popup />
        <q-btn flat label="更改" v-close-popup @click="edit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue' // ref
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

// ------------------------------------------------------------------------------------------------
const { t } = useI18n()
const $q = useQuasar()
const selected = ref([])
const options = ['名字', '帳號', '電話']
const prompt = ref(false)
const columns = [
  { name: 'image', label: t('image'), align: 'left' },
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: 'id',
    sortable: true
  },
  {
    name: 'account',
    align: 'left',
    label: t('account'),
    field: 'account',
    sortable: true
  },
  {
    name: 'name',
    align: 'left',
    label: t('name'),
    field: 'name',
    sortable: true
  },
  {
    name: 'phone',
    align: 'left',
    label: t('phone'),
    field: 'phone',
    sortable: true
  },
  {
    name: 'role',
    align: 'left',
    label: t('role'),
    field: 'role',
    sortable: true
  }
]
function promptOpen () {
  prompt.value = true
}
const rows = reactive([])
// -------------------------------------
const getAllUser = async () => {
  const data = await apiAuth.get('/users/all')
  rows.splice(0, rows.length)
  let i = 0
  for (i = 0; i < data.data.result.data.length; i++) {
    rows.push({
      id: data.data.result.data[i]._id,
      account: data.data.result.data[i].account,
      name: data.data.result.data[i].name,
      phone: data.data.result.data[i].phone,
      role: data.data.result.data[i].role
    })
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '會員取得成功'
  })
}
getAllUser()
// ---------------------------------
const form = reactive({ search: '', select: '' })
const searchName = async () => {
  try {
    console.log(form)
    if (form.select === '名字') {
      const result = await apiAuth.post('users/search/name', form)
      rows.splice(0, rows.length)
      // console.log(result.data)
      let i = 0
      for (i = 0; i <= result.data.message.length; i++) {
        rows.push({
          id: result.data.message[i]._id,
          account: result.data.message[i].account,
          name: result.data.message[i].name,
          phone: result.data.message[i].phone,
          role: result.data.message[i].role
        })
      }
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '搜尋成功'
      })
    } else if (form.select === '帳號') {
      const result = await apiAuth.post('users/search/account', form)
      rows.splice(0, rows.length)
      // console.log(result.data.message)
      let i = 0
      for (i = 0; i <= result.data.message.length; i++) {
        rows.push({
          id: result.data.message[i]._id,
          account: result.data.message[i].account,
          name: result.data.message[i].name,
          phone: result.data.message[i].phone,
          role: result.data.message[i].role
        })
      }
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '搜尋成功'
      })
    } else if (form.select === '電話') {
      const result = await apiAuth.post('users/search/phone', form)
      rows.splice(0, rows.length)
      console.log(result.data.message)
      let i = 0
      for (i = 0; i <= result.data.message.length; i++) {
        rows.push({
          id: result.data.message[i]?._id,
          account: result.data.message[i].account,
          name: result.data.message[i].name,
          phone: result.data.message[i].phone,
          role: result.data.message[i].role
        })
      }
    }
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '搜尋成功'
    })
  } catch (error) {
    console.log(error)
  }
}
// ----------------------------------
const deleteUser = async () => {
  try {
    const result = await apiAuth.delete(`/users/${selected.value[0].id}`)
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除成功'
    })
    while (rows.length) {
      rows.pop()
    }
    getAllUser()
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除失敗'
    })
  }
}
const edit = async () => {
  try {
    console.log(selected?.value[0])
    await apiAuth.patch(
      `/users/admin/${selected?.value[0].id}`,
      selected.value[0]
    )
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
</script>

<style lang="scss">

</style>

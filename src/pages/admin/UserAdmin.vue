<template>
  <section>
  <div class="q-pa-md text-center">
    <q-table
      title="會員管理"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
    >
    </q-table>

    <q-btn icon="delete" label="刪除" @click="deleteUser" class="q-ma-xl" color="teal"></q-btn>
  </div>
</section>
  <!-- <q-input class="text-center" v-model="search" outlined type="search" hint="Search" style="max-width:500px">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input> -->
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue' // ref
// const search = ref('')
import { useQuasar } from 'quasar'
const $q = useQuasar()
const selected = ref([])
const columns = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'account',
    align: 'left',
    label: 'account',
    field: 'account',
    sortable: true
  },
  {
    name: 'name',
    align: 'left',
    label: 'name',
    field: 'name',
    sortable: true
  },
  {
    name: 'phone',
    align: 'left',
    label: 'phone',
    field: 'phone',
    sortable: true
  },
  { name: 'role', align: 'left', label: 'role', field: 'role', sortable: true }
]

const rows = reactive([])
// -------------------------------------
const getAllUser = async () => {
  const data = await apiAuth.get('/users/all')
  console.log(data.data.result.data)
  let i = 0
  for (i = 0; i < data.data.result.data.length; i++) {
    rows.push({
      id: data.data.result.data[i]._id,
      account: data.data.result.data[i].account,
      name: data.data.result.data[i].name,
      phone: '0' + data.data.result.data[i].phone,
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
    while (rows.length) { rows.pop() }
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

</script>

<style lang="scss">
section{
width: 75%;}
</style>

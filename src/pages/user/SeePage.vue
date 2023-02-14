<template>
  <section>
  <h4 class="text-center">預約查詢</h4>
  <div class="q-pa-xl text-center">
    <q-table
      class="my-sticky-header-table "
      title=""
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      bordered
      no-data-label="哭喔，你尚未預約任何時間"
    />
  </div>
</section>
</template>
<script setup>
import { reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
// -------------------------------
const $q = useQuasar()
const getUser = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    console.log(data.result.reserve)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '取得成功'
    })
    let i = 0
    for (i = 0; i < data.result.reserve.length; i++) {
      rows.push({
        date: data.result.reserve[i].date,
        time: data.result.reserve[i].time,
        name: data.result.reserve[i].name,
        member: data.result.reserve[i].member,
        success: '成功'
      })
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '取得成功'
      })
    }
  } catch (error) {
    console.log(error)
  }
}
getUser()
const columns = [
  {
    name: 'name',
    align: 'left',
    label: '姓名',
    field: 'name',
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '日期',
    align: 'center',
    field: (row) => row.date,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'time',
    align: 'center',
    label: '時間',
    field: 'time',
    sortable: true
  },
  {
    name: 'member',
    align: 'center',
    label: '人數',
    field: 'member',
    sortable: true
  },
  {
    name: 'success',
    align: 'center',
    label: '成功',
    field: 'success',
    sortable: true
  }
]

const rows = reactive([])
</script>

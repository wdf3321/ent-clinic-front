<template>
  <section>
    <h4 class="text-center">預約查詢</h4>
    <div class="q-pa-md-xl text-center">
      <q-table
        class="my-sticky-header-table"
        title=""
        :rows="rows"
        :columns="columns"
        row-key="id"
        flat
        bordered
        no-data-label="哭阿，你尚未預約任何時間"
        selection="single"
        v-model:selected="selected"
      >
        <template v-slot:body-cell-success>
          <q-icon name="check" size="50px" color="primary" />
        </template>
      </q-table>
      <q-btn
        v-if="selected[0]"
        color="teal"
        icon="delete"
        @click="deleteSubmit"
        label="刪除預約"
        class="q-ma-md"
      />
    </div>
  </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import moment from 'moment'
// -------------------------------
const $q = useQuasar()
const getUser = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    let i = 0
    for (i = 0; i < data.result.reserve.length; i++) {
      if (
        moment(data.result.reserve[i].date).isBefore(
          moment().format('YYYY/MM/DD')
        )
      ) {
        continue
      } else {
        rows.push({
          id: data.result.reserve[i]._id,
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
    field: 'date',
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
const selected = ref([])
const deleteSubmit = async () => {
  try {
    console.log(selected.value[0])
    const body = {
      id: selected.value[0].id,
      time: selected.value[0].time,
      date: selected.value[0].date,
      member: selected.value[0].member
    }
    const result = await apiAuth.post('/reserve/cancel', body)
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約刪除成功'
    })
    while (rows.length) {
      rows.pop()
    }
    getUser()
  } catch (error) {
    console.log(error)
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約刪除失敗'
    })
  }
}
</script>

<style lang="scss"></style>

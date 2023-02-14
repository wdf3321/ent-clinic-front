<template>
  <section class="q-pa-md text-center">
    <q-table
      title="可供預約時間"
      :rows="rows"
      :columns="columns"
      row-key="time"
      selection="single"
      v-model:selected="selected"
    >
    </q-table>
  </section>
  <div class="q-pa-md text-center">
    <h4 class="">我要預約</h4>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">姓名</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            outlined
            v-model="form.name"
            placeholder="姓名"
            hint="姓名"
            :dense="dense"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">人數</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            outlined
            v-model="form.member"
            placeholder="人數"
            hint="人數"
            :dense="dense"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">日期</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select v-model="form.date" :options="optionsDate" label="日期" />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">時間</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select v-model="form.time" :options="optionsTime" label="時間" />
        </q-card-section>
        <q-card-actions align="right" class="text-white">
          <q-btn flat label="取消" v-close-popup color="secondary" />
          <q-btn @click="submit" label="預約" color="teal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-btn label="我要預約" color="primary" @click="prompt = true" />
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
// import { useUserStore } from 'src/stores/user'
// const user = useUserStore()
const $q = useQuasar()
const prompt = ref('false')
const dense = ref(false)
const selected = ref([])
const optionsDate = reactive([])
const optionsTime = reactive([])

// --------------------------
const getReserves = async () => {
  const data = await apiAuth.get('/reserve')
  // console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    rows.push({
      date: data.data.result[i].date,
      time: data.data.result[i].time,
      member: data.data.result[i].member,
      id: data.data.result[i]._id
    })
    // console.log(data.data.result[i].time)
    optionsDate.push(data.data.result[i].date)
    optionsTime.push(data.data.result[i].time)
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '取得成功'
  })
}
getReserves()

const form = reactive({
  name: '',
  member: '',
  time: '',
  date: ''
})

const submit = async () => {
  try {
    console.log(form)
  } catch (error) {
    console.log('asdf')
  }
}

const columns = [
  {
    name: 'date',
    required: true,
    label: 'date',
    align: 'left',
    field: (row) => row.date,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'time',
    align: 'center',
    label: 'time',
    field: 'time',
    sortable: true
  },
  {
    name: 'member',
    align: 'center',
    label: '剩餘',
    field: 'member',
    sortable: true
  }
]

const rows = reactive([])
</script>

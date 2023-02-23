<template>
  <section class="q-pa-md text-center">
    <q-table
      title="可供預約時間"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="selected"
    >
    </q-table>
  </section>
  <div class="q-pa-md text-center">
    <h4 class="">我要預約</h4>
    <!-- ------------------------------------------ -->
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
      <q-card-section>
          <div class="text-h6">日期</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input outlined v-model="form.date" :dense="dense" readonly />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">時間</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input outlined v-model="form.time" :dense="dense" readonly />
        </q-card-section>
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
            :rules="[(val) => (val && val.length > 1) || '請輸入二字以上']"
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
            :rules="[(val) => (val >= 1) || '最少需預約1位']"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">手機</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input outlined v-model="form.phone" :dense="dense" />
        </q-card-section>

        <q-card-actions align="right" class="text-white">
          <q-btn flat label="取消" v-close-popup color="secondary" />
          <q-btn @click="submit" label="預約" color="teal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- ------------------------------------------ -->
    <div v-if="!selected[0]" class="text-h6">請先選擇想預約的時間</div>
    <div v-if="selected[0]" class="text-h6" >您選擇的是:{{selected[0].date}} {{ selected[0].time }} ,醫師為:{{doctor}}</div>
    <q-btn
      v-if="selected[0]"
      label="我要預約"
      color="primary"
      @click="promptOpen"
      class="q-mt-md"
    />
  </div>
</template>
<script setup>
import { reactive, ref, watch } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user'
import moment from 'moment'
const user = useUserStore()
const $q = useQuasar()
const prompt = ref(false)
const dense = ref(false)
const selected = ref([])
const optionsDate = reactive([])
const optionsTime = reactive([])
const doctor = ref('')
// --------------------------
const getReserves = async () => {
  const data = await apiAuth.get('/reserve')
  let i = 0

  for (i = 0; i < data.data.result.length; i++) {
    if (data.data.result[i].member <= 0) {
      continue
    } else {
      rows.push({
        date: data.data.result[i].date,
        time: data.data.result[i].time,
        member: data.data.result[i].member,
        id: data.data.result[i]._id
      })
    }
    // Check if date already exists in optionsDate array
    if (!optionsDate.includes(data.data.result[i].date)) {
      optionsDate.push(data.data.result[i].date)
    }
    // Check if time already exists in optionsTime array
    if (!optionsTime.includes(data.data.result[i].time)) {
      optionsTime.push(data.data.result[i].time)
    }
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '取得成功'
  })
}
getReserves()
// ------------------------------------------------
const promptOpen = () => {
  form.time = selected.value[0].time
  form.date = selected.value[0].date
  form.phone = user.phone
  form.name = user.name
  prompt.value = true
}
const form = reactive({
  name: '',
  member: '',
  time: '',
  date: '',
  phone: ''
})

const submit = async () => {
  try {
    console.log(form)
    const result = await apiAuth.post('/reserve/make', form)
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約成功'
    })
    prompt.value = false
    while (rows.length) {
      rows.pop()
    }
    getReserves()
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約失敗，請選擇其他時間'
    })
  }
}

const columns = [
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
    label: '剩餘',
    field: 'member',
    sortable: true
  }
]

const rows = reactive([])
// -------------------------------------------------------------
watch(selected, (newValue, oldValue) => {
  const format = 'hh:mm:ss'
  const time = moment(newValue[0].time, format),
    beforemorn = moment('08:30:00', format),
    beforeTime = moment('15:00:00', format),
    afterTime = moment('18:00:00', format)
  if (moment(newValue[0].date).format('dddd') === 'Monday') {
    if (time.isBetween(beforeTime, afterTime) === true) {
      doctor.value = '張醫師'
    } else {
      doctor.value = '王醫師'
    }
  } else if (moment(newValue[0].date).format('dddd') === 'Tuesday') {
    if (time.isBetween(beforeTime, afterTime) === true) {
      doctor.value = '張醫師'
    } else {
      doctor.value = '王醫師'
    }
  } else if (moment(newValue[0].date).format('dddd') === 'Wednesday') {
    if (time.isBetween(beforemorn, beforeTime) === true) {
      doctor.value = '張醫師'
    } else if (time.isBetween(beforeTime, afterTime) === true) {
      doctor.value = '李醫師'
    } else {
      doctor.value = '王醫師'
    }
  } else if (moment(newValue[0].date).format('dddd') === 'Thursday') {
    if (time.isBetween(beforemorn, beforeTime) === true) {
      doctor.value = '李醫師'
    } else {
      console.log(time)
      doctor.value = '張醫師'
    }
  } else if (moment(newValue[0].date).format('dddd') === 'Friday') {
    if (time.isBetween(beforeTime, afterTime) === true) {
      doctor.value = '張醫師'
    } else {
      console.log(time)
      doctor.value = '王醫師'
    }
  } else if (moment(newValue[0].date).format('dddd') === 'Saturday') {
    if (time.isBetween(beforemorn, beforeTime) === true) {
      doctor.value = '王醫師'
    } else {
      console.log(time)
      doctor.value = '李醫師'
    }
  } else if (moment(newValue[0].date).format('dddd') === 'Sunday') {
    doctor.value = '張醫師'
  }
})
// -----------------------------------------------------------------------
</script>
<style lang="scss">
section {
  @media (max-width: 1023px) {
    width: 95%;
  }
  width: 75%;
  margin: auto;
}
</style>

<template>
  <section>
  <div class="q-pa-md">
    <q-table
      title="可預約人數管理"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="selected"
    >

    </q-table>
  </div>
</section>

  <!--新增  -->
  <div class="text-center q-ma-xl">
    <q-btn icon=add label="新增" color="primary" @click="prompt = true" class="q-mr-xl" />
    <q-btn icon=add_box label="新增一周" color="primary" @click="prompt2 = true" class="q-mr-xl" />
    <q-btn color="teal" label="刪除" icon=delete v-close-popup @click="deleteSubmit" />
    <!-- ---------------------------------------------------------------- -->
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">日期</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled v-model="form.date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="calendar_today" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="form.date" today-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">時間</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled v-model="form.time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="form.time" now-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">人數</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="form.member"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-white">
          <q-btn flat color="secondary" label="取消" v-close-popup />
          <q-btn color="teal" label="新增" v-close-popup @click="Submit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- ------------------------------------------------- -->
    <q-dialog v-model="prompt2" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">開始日期</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled v-model="form2.startDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="calendar_today" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="form2.startDate" today-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">結束日期</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled v-model="form2.endDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="calendar_today" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="form2.endDate" today-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">人數</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="form2.member"
            autofocus
            @keyup.enter="prompt2 = false"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">時間</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled v-model="form2.time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="form2.time" now-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right" class="text-white">
          <q-btn flat color="secondary" label="取消" v-close-popup />
          <q-btn color="teal" label="新增" v-close-popup @click="SubmitWeek" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- --------------------------------------- -->
  </div>
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
const prompt = ref(false)
const prompt2 = ref(false)
const $q = useQuasar()
// ------------------------------------
const form = reactive({
  date: '',
  time: '',
  member: ''
})
const form2 = reactive({
  startDate: '',
  endDate: '',
  time: '',
  member: ''
})
// ------------------------------------
const rows = reactive([])
const selected = ref([])
// ---------------------------------
const getReserves = async () => {
  const data = await apiAuth.get('/reserve')
  console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    rows.push({
      date: data.data.result[i].date,
      time: data.data.result[i].time,
      member: data.data.result[i].member,
      id: data.data.result[i]._id
    })
    // console.log(rows)
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '可預約取得成功'
  })
}
getReserves()

const Submit = async () => {
  const data = await apiAuth.post('/reserve/', form)
  console.log(data)
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '新增成功'
  })
}
const SubmitWeek = async () => {
  try {
    const data = await apiAuth.post('/reserve/week', form2)
    console.log(data)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '新增成功'
    })
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '新增成功'
    })
  }
}

const deleteSubmit = async () => {
  try {
    const data = await apiAuth.delete(`/reserve/${selected.value[0].id}`)
    console.log(data)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除成功'
    })
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_off',
      message: '請選擇要刪除的項目'
    })
  }
}

const columns = [
  {
    name: 'id',
    align: 'center',
    label: 'id',
    field: 'id',
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '日期',
    align: 'left',
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
  { name: 'member', label: '可預約人數', field: 'member', sortable: true }
]
</script>

<template>
  <section>
    <div class="q-pa-md">
      <q-table
      :title="$t('limitadmin')"
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
  <section>
    <div class="text-center" id="btns">
      <q-btn
        icon="add"
        label="新增一天"
        color="primary"
        @click="prompt = true"
        class="q-mr-md-xl q-my-xs-xs"
      />
      <q-btn
        icon="add_box"
        label="新增多天"
        color="primary"
        @click="prompt2 = true"
        class="q-mr-md-xl q-my-xs-xs"
      />
      <q-btn
        v-if="selected[0]"
        color="teal"
        label="刪除選擇"
        icon="delete"
        v-close-popup
        @click="deleteSubmit"
        class="q-mr-md-xl q-my-xs-xs"
      />
      <q-btn v-if="!selected[0]" icon="delete" color="teal" label="一鍵全刪" @click="confirm=true" />

    </div>
  </section>
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
  <q-dialog v-model="confirm" persistent >
      <q-card style="min-width: 200px;">
        <q-card-section class="row items-center justify-center">
          <q-avatar icon="help" color="teal" text-color="white" />
          <span class="q-ml-sm">你確定要刪除？</span>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yes" color="primary" @click="deleteall" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- ---------------------------- -->
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
const confirm = ref(false)
// ---------------------------------
const getReserves = async () => {
  const data = await apiAuth.get('/reserve')
  console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    if (data.data.result[i].member === 0) {
      continue
    }
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
  while (rows.length) {
    rows.pop()
  }
  getReserves()
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
    while (rows.length) {
      rows.pop()
    }
    getReserves()
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
    while (rows.length) {
      rows.pop()
    }
    getReserves()
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_off',
      message: '請選擇要刪除的項目'
    })
  }
}
// ------------------------------------------------------------
const deleteall = async () => {
  try {
    const result = await apiAuth.delete('/reserve/delete/all')
    console.log(result)
    rows.splice(0, rows.length)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除成功'
    })
    getReserves()
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除失敗'
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
    label: t('date'),
    align: 'left',
    field: (row) => row.date,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'time',
    align: 'center',
    label: t('time'),
    field: 'time',
    sortable: true
  },
  { name: 'member', label: t('limit'), field: 'member', sortable: true }
]
</script>

<style lang="scss">

</style>

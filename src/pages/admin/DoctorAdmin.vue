<template>
  <section class="text-center">
    <q-btn
      icon="add"
      label="編輯"
      color="primary"
      @click="prompt = true"
      class="q-my-xl"
    />
    <div class="justify-center items-center row">
      <q-table
        id="table"
        class="q-mx-xl-md"
        :rows="rowsdoctor"
        :columns="columns2"
        hide-bottom
      >
        <!-- eslint-disable -->
        <template v-slot:body-cell-mon="props" id="template">
        <q-td>
          <q-img v-if="props.row.mon==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.mon==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.mon==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-tue="props">
        <q-td>
          <q-img v-if="props.row.tue==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.tue==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.tue==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-wed="props">
        <q-td>
          <q-img v-if="props.row.wed==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.wed==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.wed==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-thur="props">
        <q-td>
          <q-img v-if="props.row.thur==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.thur==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.thur==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-fri="props">
        <q-td>
          <q-img v-if="props.row.fri==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.fri==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.fri==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-sat="props">
        <q-td>
          <q-img v-if="props.row.sat==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.sat==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.sat==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
        <template v-slot:body-cell-sun="props">
        <q-td>
          <q-img v-if="props.row.sun==='王醫師'" src="~assets/circlea.svg"/>
          <q-img v-if="props.row.sun==='張醫師'" src="~assets/circleb.svg"/>
          <q-img v-if="props.row.sun==='李醫師'" src="~assets/circlec.svg"/>
        </q-td>
        </template>
      </q-table>
    </div>
  </section>

  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 400px">
      <q-card-section>
        <q-select
          outlined
          v-model="form.time"
          :options="optionstime"
          label="時間"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.mon"
          :options="options"
          label="星期一"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.tue"
          :options="options"
          label="星期二"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.wed"
          :options="options"
          label="星期三"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.thur"
          :options="options"
          label="星期四"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.fri"
          :options="options"
          label="星期五"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.sat"
          :options="options"
          label="星期六"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-select
          outlined
          v-model="form.sun"
          :options="options"
          label="星期日"
          :rules="[(val) => val.length > 0 || 'Please select']"
        />
      </q-card-section>
      <q-card-actions align="right" class="text-white">
        <q-btn flat color="secondary" label="取消" v-close-popup />
        <q-btn color="teal" label="新增" v-close-popup @click="submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { apiAuth, api } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const $q = useQuasar()
const form = reactive({
  time: '',
  mon: '',
  tue: '',
  wed: '',
  thur: '',
  fri: '',
  sat: '',
  sun: ''
})
const prompt = ref(false)
const options = ['王醫師', '張醫師', '李醫師']
const optionstime = ['8:30-12:00', '15:00-18:00', '18:30-22:00']
const columns2 = [
  {
    name: 'name',
    required: true,
    label: t('preview'),
    align: 'left',
    field: 'time',
    sortable: false
  },
  { name: 'mon', label: t('mon'), field: 'mon', sortable: false, align: 'center' },
  { name: 'tue', label: t('tue'), field: 'tue', sortable: false, align: 'center' },
  { name: 'wed', label: t('wed'), field: 'wed', sortable: false, align: 'center' },
  {
    name: 'thur',
    label: t('thur'),
    field: 'thur',
    sortable: false,
    align: 'center'
  },
  { name: 'fri', label: t('fri'), field: 'fri', sortable: false, align: 'center' },
  { name: 'sat', label: t('sat'), field: 'sat', sortable: false, align: 'center' },
  { name: 'sun', label: t('sun'), field: 'sun', sortable: false, align: 'center' }
]
const submit = async () => {
  try {
    const result = await apiAuth.patch('/doctors/edit', form)
    console.log(result)
    rowsdoctor.splice(0, rowsdoctor.length)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '修改成功'
    })
    getDoctor()
    form.time = ''
    form.mon = ''
    form.tue = ''
    form.wed = ''
    form.thur = ''
    form.fri = ''
    form.sat = ''
    form.sun = ''
  } catch (error) {
    console.log(error.message)
  }
}
const rowsdoctor = reactive([])
const getDoctor = async () => {
  const data = await api.get('/doctors')
  console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    rowsdoctor.push({
      time: data.data.result[i].time,
      mon: data.data.result[i].mon,
      tue: data.data.result[i].tue,
      wed: data.data.result[i].wed,
      thur: data.data.result[i].thur,
      fri: data.data.result[i].fri,
      sat: data.data.result[i].sat,
      sun: data.data.result[i].sun
    })
  }
  console.log(rowsdoctor)
}
getDoctor()
</script>

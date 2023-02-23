<template>
  <section>
    <div class="q-pa-md text-center">
      <q-table
        :title="$t('reserveadmin')"
        :rows="rows"
        :columns="columns"
        :row-key="rowkey"
        selection="single"
        v-model:selected="selected"
        :filter="filter"
      >
      <template v-slot:top-right>
        <q-input filled v-model="filter" mask="date">
          <template v-slot:append>
            <q-icon name="calendar_today" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="filter" today-btn>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </template>
      </q-table>
    </div>

    <div class="row-xs column justify-center">
        <q-btn
        color="primary"
        icon="archive"
        label="產生csv"
        no-caps
        @click="exportTable"
        class="q-mx-md"
      />
      <q-btn
        v-if="selected[0]"
        color="teal"
        icon="delete"
        @click="deleteSubmit"
        label="刪除"
        class="q-mx-md"
      />
      <q-btn
        v-if="!selected[0]"
        color="teal"
        icon="delete"
        @click="deleteall"
        label="一鍵全刪"
        class="q-mx-md"
      />
      </div>
      <div class="row justify-center">
        <q-btn
        icon="reply"
        label="返回"
        class="q-mt-xl"
        @click="zero"
        color="teal"
      />
      </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { exportFile, useQuasar } from 'quasar'
import { apiAuth } from 'src/boot/axios'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// -----------------------
const selected = ref([])
const $q = useQuasar()
const filter = ref('')
const val = ref('false')
const rowkey = ref('id')
const columns = [
  {
    name: '_id',
    required: true,
    label: '_id',
    align: 'left',
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'name',
    align: 'center',
    label: t('name'),
    field: 'name',
    sortable: true
  },
  { name: 'date', label: t('date'), field: 'date', sortable: true },
  { name: 'time', label: t('time'), field: 'time', sortable: true },
  { name: 'member', label: t('member'), field: 'member', sortable: true }
]
const rows = reactive([])

const getReserves = async () => {
  const data = await apiAuth.get('/reserve/all')
  console.log(data.data.message)
  rows.splice(0, rows.length)
  let i = 0
  for (i = 0; i < data.data.message.length; i++) {
    rows.push({
      date: data.data.message[i].date,
      time: data.data.message[i].time,
      member: data.data.message[i].member,
      id: data.data.message[i]._id,
      name: data.data.message[i].name
    })
    // console.log(rows)
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '預約取得成功'
  })
}
getReserves()
function zero () {
  getReserves()
  filter.value = ''
  val.value = false
  selected.value = []
}
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
    getReserves()
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
// --------------------------------------------
const deleteall = async () => {
  try {
    rows.splice(0, rows.length)
    const result = await apiAuth.post('/reserve/cancelall')
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約刪除成功'
    })
  } catch (error) {
    console.log(error)
  }
}
// -----------------------------------------------
function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val

  formatted =
    formatted === void 0 || formatted === null ? '' : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

function exportTable () {
  // naive encoding to csv format
  const content = [columns.map((col) => wrapCsvValue(col.label))]
    .concat(
      rows.map((row) =>
        columns
          .map((col) =>
            wrapCsvValue(
              typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(',')
      )
    )
    .join('\r\n')

  const status = exportFile('table-export.csv', '\ufeff' + content, 'text/csv')

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    })
  }
}
</script>

<style lang="scss">
</style>

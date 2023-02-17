<template>
  <section>
    <div class="q-pa-md text-center">
      <q-table
        title="預約管理"
        :rows="rows"
        :columns="columns"
        row-key="id"
        selection="single"
        v-model:selected="selected"
      >
      </q-table>
      <q-btn
        color="primary"
        icon="archive"
        label="產生csv"
        no-caps
        @click="exportTable"
      />
      <q-btn
        color="teal"
        icon="delete"
        @click="deleteSubmit"
        class="q-ma-xl"
        label="刪除"
      />
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { exportFile, useQuasar } from 'quasar'
import { apiAuth } from 'src/boot/axios'

// -----------------------
const selected = ref([])
const $q = useQuasar()
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
    label: 'name',
    field: 'name',
    sortable: true
  },
  { name: 'date', label: 'date', field: 'date', sortable: true },
  { name: 'time', label: 'time', field: 'time', sortable: true },
  { name: 'member', label: 'member', field: 'member', sortable: true }
]
const rows = reactive([])

const getReserves = async () => {
  const data = await apiAuth.get('/reserve/all')
  console.log(data.data.message)
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

const deleteSubmit = async () => {
  try {
    console.log(selected.value[0].id)
    const result = await apiAuth.delete(`/reserve/delete/${selected.value[0].id}`)
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約取得成功'
    })
    while (rows.length) { rows.pop() }
    getReserves()
  } catch (error) {
    console.log(error)
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '預約取得成功'
    })
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

  const status = exportFile('table-export.csv', content, 'text/csv')

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
section{
width: 75%;}
</style>

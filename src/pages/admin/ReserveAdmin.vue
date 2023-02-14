<template>
<section>
<div class="q-pa-md text-center">
    <q-table
      title="預約管理"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
    >
    </q-table>
    <q-btn color="teal" icon=delete @click="deleteSubmit" class="q-ma-xl" />
  </div>
</section>
</template>

<script setup>
import { ref } from 'vue'

// -----------------------
const selected = ref([])

const columns = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', align: 'center', label: 'name', field: 'name', sortable: true },
  { name: 'phone', label: 'phone', field: 'phone', sortable: true },
  { name: 'date', label: 'date', field: 'date', sortable: true },
  { name: 'time', label: 'time', field: 'time', sortable: true }

]
const rows = [
  {
    id: '222222',
    name: 'Frozen Yogurt',
    phone: '0987654159',
    date: '2022-01-01',
    time: '00:00'
  }
]
</script>

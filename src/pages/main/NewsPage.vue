<template>
  <section data-aos="fade-down" id="indexsection">
    <h3>最新消息</h3>
    <div class="row items-center justify-center">
      <div id="table1" class="q-ma-md-xl">
        <q-table :rows="rows" :columns="columns" row-key="name" virtual-scroll hide-header>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width />
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td auto-width>
                <q-btn
                  size="md"
                  color="primary"
                  round
                  dense
                  @click="props.row.expand = !props.row.expand"
                  :icon="props.row.expand ? 'remove' : 'add'"
                />
              </q-td>
              <q-td v-for="col in props.cols" :key="col.name" :props="props" >
                <div class="inside">{{ col.value }}</div>
              </q-td>
            </q-tr>
            <q-tr v-show="props.row.expand" :props="props">
              <q-td auto-width="true" colspan="100%">
                <div
                  class="text-left inside">
                  {{ props.row.inside }}
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </section>
</template>
<script setup>
import { api } from 'src/boot/axios'
import { reactive } from 'vue'
// import { useUserStore } from 'src/stores/articles'
// const user = useUserStore()

const rows = reactive([])
const columns = [
  {
    name: 'time',
    required: true,
    label: '時間',
    align: 'left',
    field: (row) => row.time,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'title',
    align: 'center',
    label: '標題',
    field: 'title',
    sortable: true
  }
]

const getArticles = async () => {
  const data = await api.get('/articles')
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    rows.push({
      title: data.data.result[i].title,
      time: data.data.result[i].date,
      inside: data.data.result[i].inside
    })
    // console.log(rows)
  }
  rows.reverse()
}
getArticles()
</script>

<style lang="scss"></style>

<template>
    <section>
      <q-select
        outlined
        v-model="form.mon"
        :options="options"
        label="搜尋類別"
      />
      <q-select
        outlined
        v-model="form.tue"
        :options="options"
        label="搜尋類別"
      />
      <q-select
        outlined
        v-model="form.wed"
        :options="options"
        label="搜尋類別"
      />
      <q-select
        outlined
        v-model="form.thur"
        :options="options"
        label="搜尋類別"
      />
      <q-select
        outlined
        v-model="form.fri"
        :options="options"
        label="搜尋類別"
      />
      <q-select
        outlined
        v-model="form.sat"
        :options="options"
        label="搜尋類別"
      />
      <q-select
        outlined
        v-model="form.sun"
        :options="options"
        label="搜尋類別"
      />
    </section>
</template>

<script setup>
import { reactive } from 'vue'

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
const options = ['a', 'b', 'c']

</script>

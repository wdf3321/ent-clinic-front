<template>
    <q-card class="my-card" flat bordered >
      <q-card-section>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-card-section>
        <q-card-section>
          {{ date }}
        </q-card-section>
        <q-card-section>
          {{ title }}
        </q-card-section>

    </q-card>
</template>

<script setup>

import { useArticleStore } from 'src/stores/articles'
const store = useArticleStore()
store.getArticles()

defineProps({
  date: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  inside: {
    type: String,
    default: ''

  }

})
</script>

<style>
.my-card{

color:#000}
</style>

<template>
  <div class="q-pa-md">
    <q-card class="my-card col-md-6" flat bordered >
      <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-card-section>
          {{ title }}

        </q-card-section>

        <q-card-section>
          {{ date }}
          {{ inside }}
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
// import { StoreState } from 'pinia'
import { useArticleStore } from 'src/stores/articles'
const store = useArticleStore()
store.getArticles()
// console.log(store.articles[0].title)
// const articles = storeToRefs(store)
defineProps({
  props: {
    time: {
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
  }
})
</script>

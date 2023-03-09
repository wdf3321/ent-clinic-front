<template>
<section id="indexsection">
  <h3>最新消息</h3>
  <div class="row justify-center">
    <div class="col-md-3 col-xs-12 q-ma-md" v-for="article in articles" :key="article._id">
      <ArticlesView v-bind="article"/>
    </div>
    </div>
  </section>
</template>

<script setup>
import { api } from 'src/boot/axios'
import { reactive } from 'vue'
import ArticlesView from 'src/components/ArticlesView.vue'

const articles = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/articles')
    articles.push(...data.result)
    articles.reverse()
    console.log(articles)
  } catch (error) {
    console.log('asd')
  }
})()
</script>

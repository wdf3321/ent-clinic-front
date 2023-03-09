<template>
  <section id="indexsection">
    <q-breadcrumbs class="q-ma-xl" separator=">" active-color="orange-10">
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el label="最新消息" icon="widgets" />
      <q-breadcrumbs-el
        :label="articles.title"
        icon="navigation"
        color="orange"
      />
    </q-breadcrumbs>
    <div class="rowarticle q-pa-md q-mb-xl text-center">
      <div class="text-h3 text-primary">
        {{ articles.title }}
      </div>
    </div>
    <div class="rowarticle q-pa-md q-mb-xl">
      <div class="text-h6 text-primary ">
        {{ articles.inside }}
      </div>
    </div>
    <div class="row justify-center q-ma-md">
      <q-btn to="/newsnews/" label="回上頁" icon="arrow_back" color="primary"/>
    </div>
  </section>
</template>
<script setup>
import { api } from 'src/boot/axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// const router = useRouter()

const articles = reactive({}); //eslint-disable-line

// eslint-disable-next-line
const get = async () => {
  console.log(route.params._id)
  const { data } = await api.get('/articles/' + route.params.id)
  articles._id = data.result._id
  articles.date = data.result.date
  articles.title = data.result.title
  articles.inside = data.result.inside

  document.title = '最新消息 | ' + articles.title
  // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
}
get()
</script>

<style lang="scss">
.rowarticle {
  width: 80%;
  margin: auto;
}
</style>

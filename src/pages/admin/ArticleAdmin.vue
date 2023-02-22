<template>
  <section>
    <q-spinner v-if="loading" color="primary" size="500px" />
    <p v-if="error">{{ error.message }}</p>
    <div class="q-pa-md text-center">
      <q-table
        title="消息管理"
        :rows="articles"
        :columns="columns"
        row-key="title"
        selection="single"
        v-model:selected="selected"
      >
      </q-table>
      <div class="q-mt-xl">內容預覽：{{ selected[0]?.inside }}</div>
    </div>

    <!-- --------------------- -->
    <!--新增  -->
    <section>
      <div class="text-center" id="btns">
        <q-btn
          icon="add"
          color="primary"
          @click="prompt = true"
          class="q-mr-md-xl q-my-xs-xs"
          label="新增消息"
        />
        <q-btn
          @click="deleteArcticle"
          type="submit"
          color="teal"
          icon="delete"
          label="刪除最舊"
          class="q-mr-md-xl q-my-xs-xs"
        />
        <q-btn
        v-if="selected[0]"
          @click="deleteSelectArcticle"
          type="submit"
          color="teal"
          icon="delete"
          label="刪除選擇"
          class="q-mr-md-xl q-my-xs-xs"
        />
      </div>
    </section>
  </section>
  <!-- ------------------------------- -->
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">日期</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input filled v-model="form.date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Close"
                      color="primary"
                      flat
                    ></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time
                  v-model="form.date"
                  mask="YYYY-MM-DD HH:mm"
                  format24h
                  now-btn
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">標題</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="form.title" outline type="text" hint="標題" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">內容</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="form.inside" outline hint="內容" type="textarea" />
      </q-card-section>
      <q-card-actions align="right" class="text-white">
        <q-btn flat color="secondary" label="取消" v-close-popup />
        <q-btn color="teal" label="新增" @click="Submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--  -->
</template>

<script setup>
import { useArticleStore } from 'src/stores/articles'
import { useQuasar } from 'quasar'
import { reactive, ref } from 'vue' //, ref
// import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { apiAuth } from 'src/boot/axios'
const { articles, loading, error } = storeToRefs(useArticleStore())

const selected = ref([])
const prompt = ref(false)
const $q = useQuasar()
// -----------------------------------
const form = reactive({
  date: '2022-01-01 00:00',
  title: '',
  inside: ''
})
const store = useArticleStore()
store.getArticles()

const deleteArcticle = () => {
  store.deleteArticle()
}
const deleteSelectArcticle = async () => {
  try {
    const result = await apiAuth.delete(
      `/articles/delete/${selected.value[0]?._id}`
    )
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除成功'
    })
    while (articles.length) {
      articles.pop()
    }
    store.getArticles()
  } catch (error) {
    console.log(error)
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '刪除失敗'
    })
  }
}

const Submit = () => {
  store.createArticle(form)
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '新增成功'
  })
  prompt.value = false
  form.date = ''
  form.title = ''
  form.inside = ''
  while (articles.length) {
    articles.pop()
  }
  store.getArticles()
}

const columns = [
  {
    name: 'date',
    required: true,
    label: '時間',
    align: 'left',
    field: (row) => row.date,
    sortable: true
  },
  {
    name: 'title',
    align: 'left',
    label: '標題',
    field: 'title',
    sortable: true
  },
  {
    name: 'id',
    align: 'right',
    label: 'id',
    field: '_id',
    sortable: true
  }
]
</script>
<style lang="scss">
#btns {
  width: 200px;
  margin: auto;
  @media (min-width: 1024px) {
    width: 100%;
    text-align: center;
  }
}
section {
  @media (max-width: 1023px) {
    width: 100%;
  }
  width: 75%;
}
</style>

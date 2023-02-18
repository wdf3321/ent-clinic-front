<template>
  <div class="text-center">

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <q-form @submit="upload">
            <img-input v-model="form.image" :width="300" :height="200" />
            <q-input outlined v-model="form.id" label="第幾張"></q-input>
            <q-btn flat label="取消" v-close-popup />
            <q-btn
              type="submit"
              icon="upload"
              color="teal"
              :loading="loading"
            ></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <section>
    <div class="q-pa-md text-center">
      <q-table
        title="BANNER"
        :rows="rows"
        :columns="columns"
        row-key="id"
        selection="single"
        v-model:selected="selected"
      >
      </q-table>
      <q-btn label="新增圖片" icon="add" color="primary" @click="prompt = true" class="q-mx-xl"/>
      <q-btn @click="delete1"  label="刪除圖片" icon="delete" color="teal" class="q-my-xl" />
    </div>
    <div class="q-mt-md" id="pic">
      預覽；
      <q-img :src="selected[0]?.image"></q-img>
    </div>
  </section>
</template>

<script setup>
import ImgInput from 'vue3-img-input'
import { reactive, ref } from 'vue' // reactive
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const rows = reactive([])
const selected = ref([])
const loading = ref(false)
const prompt = ref(false)
const form = reactive({
  id: '',
  image: undefined
})
const getBanner = async () => {
  const data = await apiAuth.get('/banner')
  console.log(data.data.result)
  let i = 0
  for (i = 0; i < data.data.result.length; i++) {
    rows.push({
      _id: data.data.result[i]._id,
      id: data.data.result[i].id,
      image: data.data.result[i].image
    })
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '取得成功'
  })
}
getBanner()

const upload = async () => {
  try {
    loading.value = true
    const fd = new FormData()
    fd.append('image', form.image)
    fd.append('id', form.id)
    const result = await apiAuth.post('/banner', fd)
    console.log(result)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '上傳成功'
    })
    loading.value = false
    prompt.value = false
    while (rows.length) { rows.pop() }
    getBanner()
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_off',
      message: '上傳失敗'
    })
    loading.value = false
  }
}
const delete1 = async () => {
  const data = await apiAuth.delete(`/banner/${selected.value[0]._id}`)
  console.log(data)
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: '刪除成功'
  })
  while (rows.length) { rows.pop() }
  getBanner()
}

const columns = [
  {
    name: '_id',
    align: 'center',
    label: '_id',
    field: '_id',
    sortable: true
  },
  {
    name: 'id',
    align: 'center',
    label: 'id',
    field: 'id',
    sortable: true
  },
  {
    name: 'image',
    label: 'image',
    align: 'center',
    field: 'image',
    sortable: true
  }
]
</script>

<style>
img {
  width: 300px;
  height: 300px;
}
.q-form {
  width: 300px;
  height: 500px;
  margin: auto;
  text-align: center;
}
#pic{
  margin: auto;
width: 300px;height: 300px;
}
section{
width: 75%;}
</style>

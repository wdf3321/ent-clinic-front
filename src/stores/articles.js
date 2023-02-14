import { defineStore } from 'pinia'
// import { reactive, ref } from 'vue' // ref
import { api, apiAuth } from 'src/boot/axios' // apiAuth
export const useArticleStore = defineStore({
  id: 'articles',
  state: () => ({
    articles: []
  }),
  getters: {
    getAllArticle: (state) => {
      return state.articles
    }
  },
  actions: {
    getArticles () {
      api.get('/articles').then((data) => {
        this.articles = data?.data?.result
      })
    },
    createArticle (param) {
      apiAuth.post('/articles/create', param).then((data) => {
        const article = useArticleStore()
        article.getArticles()
      })
    },
    deleteArticle () {
      apiAuth.delete('/articles/delete').then(() => {
        const article = useArticleStore()
        article.getArticles()
      })
    }
  }
})

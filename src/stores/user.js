import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import { api, apiAuth } from 'src/boot/axios'
// import { useRouter } from 'vue-router'
//

export const useUserStore = defineStore(
  'user',
  () => {
    const name = ref('')
    const account = ref('')
    const phone = ref('')
    const tokens = ref('')
    const role = ref(0)
    const reserve = ref('')
    const _id = ref('')

    const isLogin = computed(() => {
      return tokens.value.length > 0
    })
    const isAdmin = computed(() => {
      return role.value === 1
    })

    const $q = useQuasar()
    const login = async (form) => {
      try {
        const { data } = await api.post('/users/login', form)
        _id.value = data.result._id
        tokens.value = data.result.token
        account.value = data.result.account
        name.value = data.result.name
        phone.value = data.result.phone
        role.value = data.result.role
        reserve.value = [data.result.reserve]

        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '登入成功'
        })
      } catch (error) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'info',
          message: '登入失敗'
        })
      }
    }
    // router 要改成function
    const logout = async () => {
      try {
        await apiAuth.delete('/users/logout')
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '登出成功'
        })
      } catch (error) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: error.message
        })
      }
      tokens.value = ''
      account.value = ''
      name.value = ''
      phone.value = ''
      role.value = ''
      reserve.value = ''
    }
    return {
      tokens,
      account,
      name,
      phone,
      role,
      login,
      isLogin,
      isAdmin,
      reserve,
      logout

    }
  },
  {
    persist: {
      key: '20232023',
      paths: ['tokens', 'account', 'phone', 'name', 'role']
    }
  },
  {}
)

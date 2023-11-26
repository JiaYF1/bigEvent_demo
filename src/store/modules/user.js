import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})
    const setUser = (obj) => {
      user.value = obj
    }
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      setUser,
      getUser
    }
  },
  {
    persist: true
  }
)

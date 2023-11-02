<script setup>
import { useRoute, useRouter } from 'vue-router'

// 1.获取路由对象 router useRouter
const router = useRouter()
console.log(router) //有push、共等方法，等同于vue2中的$router
// 2.获取路由参数 route useRoute
const route = useRoute()
console.log(route) //有query、params、path、fullpath等参数，等同于vue2中的$route

import { useUserStore } from '@/store/index'
const userStore = useUserStore()
const login = () => {
  userStore.setToken('jfjhghd')
}
</script>

<template>
  <router-view></router-view>

  <p>{{ userStore.token }}</p>
  <el-button @click="login">登陆</el-button>
  <el-button @click="userStore.removeToken">登出</el-button>
</template>

<style scoped></style>

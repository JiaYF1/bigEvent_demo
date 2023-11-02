// 创建pinia和持久化插件
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

// 导出pinia，在main.js中use
export default pinia
// 暴露仓库供组件使用
export * from './modules/user'

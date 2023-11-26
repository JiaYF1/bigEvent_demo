<script setup>
import { artGetChannelsService, artDelChannelService } from '@/api/article.js'
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue'
const channelList = ref([])
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
const loading = ref(false)
const dialog = ref()
getChannelList()
// 编辑分类时，打开弹窗，并且将当前数据传过去渲染表单
const onEditChannel = (row) => {
  dialog.value.open(row)
}
// 删除时弹框确认，确定删除后发请求删除，并重新获取list
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认删除该分类信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelChannelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getChannelList()
}
// 添加分类时，打开弹窗，并且传空数据渲染
const onAddChannel = () => {
  dialog.value.open({})
}
// 弹窗中点击确认后，发送事件过来，重新获取list数据
const onSuccess = () => {
  getChannelList()
}
</script>
<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel"> 添加分类 </el-button>
    </template>

    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary" @click="onEditChannel(row)"></el-button>
          <el-button :icon="Delete" circle plain type="danger" @click="onDelChannel(row)"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <!-- 封装组件编辑和新增共用此弹窗 -->
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

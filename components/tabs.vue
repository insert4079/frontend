<template>
  <div class='tabs'>
    <el-tabs>
      <el-tab-pane label="С дедлайном" name="first">User</el-tab-pane>
      <el-tab-pane label="Без дедлайна" name="second">
        <all-tasks></all-tasks>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AllTasks from '~/components/allTasks'

export default {
  components: {
    AllTasks
  },
  name: 'TaskTabs'
}
</script>

<style scoped>
.tabs{
  color: black;
}
</style>

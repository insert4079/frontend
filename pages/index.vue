<template>
  <div class='main'>
<!--    <template v-for='item in allTasks'>-->
<!--      <div :key='item._id'>{{ item.header }}</div>-->
<!--    </template>-->
    <header-page></header-page>
    <div class='main__sub'>
      <div>Октябрь 2021</div>
      <div>Добавить</div>
    </div>
    <task-tabs></task-tabs>
  </div>

</template>

<script>
// import apiTasks from '~/api/taskApi.js'
import HeaderPage from '../components/header'
import TaskTabs from '../components/tabs'

export default {
  components: {
    HeaderPage,
    TaskTabs
  },
  data() {
    return {
      // allTasks: []
    }
  },
  mounted() {
    // this.getAllTasks();
  },
  methods: {
    // async getAllTasks() {
    //   try {
    //     const { data } = await apiTasks.getTasks();
    //     this.allTasks = data;
    //     // console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //     throw error;
    //   }
    // },

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.main{
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 0;
}

.main__sub{
  display: flex;
  justify-content: space-between;
}
</style>

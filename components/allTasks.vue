<template>
  <div class='all-tasks'>
    <div v-for='task in allTasks' :key='task._id'>
<!--      <div>{{ task.header }}</div>-->
      <task-card
        :value='task'
      >

      </task-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskCard from '~/components/taskCard'


export default {
  name: 'AllTasks',
  components: {
    TaskCard
  },
  computed: {
    ...mapState({
      allTasks: state => state.tasks.allTasks
    })
  },
  mounted() {
    this.getAllTasks();
  },
  methods: {
    async getAllTasks() {
      try {
        await this.$store.dispatch('tasks/getAllTasks');
        // this.suggestions = [...this.usersList];
        // if (this.usersList.length) {
        //   this.getActiveUserOnTop();
        // }
      } catch (error) {
        this.$notify({
          title: 'Ошибка',
          message: 'Не удалось загрузить список сотрудников, напишите разработчикам',
          type: 'error'
        });
        console.log(error);
      }
    }
  }

}
</script>

<style scoped>
.all-tasks{
  color: black;
}
</style>

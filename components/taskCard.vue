<template>
  <div class='card'>
    <div class='card__name-priority'>
      <div class='card__priority'>
        <priority :status='value.priority'></priority>
      </div>
      <div class='card__name'>{{ value.name }}</div>
    </div>
    <div class='card__checkbox'>
      <el-checkbox></el-checkbox>
    </div>
  </div>
</template>

<script>
import Priority from '~/components/priority'

export default {
  name: 'TaskCard',
  components: {
    Priority
  },
  props: {
    value: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.card{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__name-priority{
  display: flex;
  align-items: center;
}

.card__name{
  margin-left: 8px;
}
</style>

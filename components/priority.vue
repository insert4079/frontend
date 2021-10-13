<template>
  <div class='priority'>
    <div v-if='status === "low"' class='priority__item priority__item-l'></div>
    <div v-if='status === "medium"' class='priority__item priority__item-m'></div>
    <div v-if='status === "high"' class='priority__item priority__item-h'></div>
    <div v-if='status === "the highest"' class='priority__item priority__item-t'></div>
  </div>
</template>

<script>

export default {
  name: 'TaskCard',
  props: {
    status: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.priority__item{
  /* width: 26px; */

  /* height: 26px; */

  /* display: flex; */

  /* justify-content: center; */

  /* align-items: center; */

  /* text-transform: uppercase; */

  /* border-radius: 50%; */

  /* margin-bottom: 5px; */

  /* filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.12)); */

  /* color: aliceblue; */

  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.priority__item-l{
  background: #6c6;
}

.priority__item-m{
  background: #0cf;
}

.priority__item-h{
  background: #c33;
}

.priority__item-t{
  background: #903;
}
</style>

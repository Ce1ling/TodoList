<template>
  <ul class="todo-main">
    <!-- 循环遍历things, 将things传递给子组件 -->
    <ThingItem v-for="t in things" :key="t.id" :thing="t" />
  </ul>
</template>

<script>
import ThingItem from "./ThingItem";

// 暴露List
export default {
  name: "ThingList",
  components: { ThingItem },
  // 接收数据(things)
  props: ["things"],
};
</script>

<style scoped>
/*list*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
	margin-top: 10px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
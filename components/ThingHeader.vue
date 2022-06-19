<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入事件名称，按回车键确认"
      v-model="val"
      @keydown.enter="addThings"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

// 暴露Header
export default {
  name: "ThingsHeader",
  props: ["things"],
  data() {
    return {
      val: "",
    };
  },
  methods: {
    addThings(e) {
      // 判断输入是否为 空 或 空格
      if (!this.val.trim()) return alert("输入不能为空");
      // 创建一件thing
      const thingObj = { id: nanoid(), name: this.val, complete: false };
      // 触发父级addThing事件并传入数据
      this.$emit("addThing", thingObj);
      // 清空输入框
      this.val = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
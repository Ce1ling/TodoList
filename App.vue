<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <ThingHeader @addThing="addThing" :things="things" />
        <ThingList :things="things" />
        <ThingFooter
          :things="things"
          @compAllThing="compAllThing"
          @cleanComp="cleanComp"
        />
      </div>
    </div>
  </div>
</template>

<script>
// 引入消息订阅发布
import pubsub from "pubsub-js";
// 引入组件
import ThingHeader from "./components/ThingHeader";
import ThingList from "./components/ThingList";
import ThingFooter from "./components/ThingFooter";

// 暴露App组件
export default {
  name: "App",
  components: { ThingHeader, ThingList, ThingFooter },
  data() {
    return {
      // 定义一个数组用于存储things, 存入localStorage, 如果没有数据这是一个空数组
      things: JSON.parse(localStorage.getItem("things")) || [],
    };
  },
  methods: {
    addThing(thingObj) {	// 添加thing: 定义一个函数给Header使用, 并用参数接收传过来的数据
      this.things.unshift(thingObj);
    },
    changeCheck(id) {		// 勾选和去取消勾选
      // 遍历所有数据
      this.things.forEach((t) => {
        // 筛选符合条件的数据(传过来的id 等于 当前数据id的数据), 并把complete取反
        if (t.id === id) t.complete = !t.complete;
      });
    },  
    delThing(_, id) {		// 删除数据. 用消息订阅与发布实现, 记得第一个参数是消息名(不需要可以用 _ 占位), 后面才是数据
      // 筛除掉不符合掉件的数据, 生成新数组(因为filter就是会生成一个新数组)然后替换掉things
      this.things = this.things.filter((t) => t.id !== id);
    },
    updateName(id, newVal) {		// 更新事件名
      this.things.forEach((t) => {
        if (t.id === id) {
          t.name = newVal;
        }
      });
    },
    compAllThing(val) {		// 全选和取消全选
      this.things.forEach((t) => {
        t.complete = val;
      });
    },
    cleanComp() {		// 清除所有已完成的thing
      this.things = this.things.filter((t) => {
        return !t.complete;
      });
    },
  },
  watch: {
    // 监视things, 获取到新值(第二个参数为旧值, 此处不需要旧值)
    // things( newVal ){
    //     // 将其写入localStorage
    //     localStorage.setItem( 'things', JSON.stringify( newVal ) );
    // }
    // 上面为简写形式, 没有深度监视, 无法监视到已完成的事件
    things: {
      // 开启深度监视
      deep: true,
      handler(newVal) {
        localStorage.setItem("things", JSON.stringify(newVal));
      },
    },
  },
  mounted() {
    this.$bus.$on("changeCheck", this.changeCheck);
    // this.$bus.$on( 'delThing', this.delThing )
    // 订阅消息
    this.pubDelThing = pubsub.subscribe("delThing", this.delThing);
    // 更新事件名
    this.$bus.$on("updateName", this.updateName);
  },
  beforeDestroy() {
    this.$bus.$off("changeCheck");
    this.$bus.$off("updateName");
    // 取消订阅
    pubsub.unsubscribe(pubDelThing);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  border: 1px solid #f78989;
  background-color: #f56c6c;
}
.btn-danger:hover {
  color: #fff;
  background-color: #f78989;
	border-color: #f78989;
}
.btn-edit {
  color: #fff;
  border: 1px solid #ffca7c;
  background-color: #e6a23c;
  margin-right: 10px;
}
.btn-edit:hover {
  background-color: #ffca7c;
	color: #fff;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
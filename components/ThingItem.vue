<template>
	<li>
		<label>
			<input
				type="checkbox"
				:checked="thing.complete"
				@change="change(thing.id)"
			/>
			<!-- 展示thing -->
			<span v-show="!thing.isEdit">{{ thing.name }}</span>
			<input
				type="text"
				:value="thing.name"
				v-show="thing.isEdit"
				@blur="blur(thing, $event)"
				@keydown.enter="blur(thing, $event)"
				ref="editInp"
			/>
		</label>
		<button class="btn btn-danger" @click="del(thing.id)">删除</button>
		<button
			class="btn btn-dange btn-edit"
			@click="edit(thing)"
			v-show="!thing.isEdit"
		>
			编辑
		</button>
	</li>
</template>

<script>
// 引入消息订阅
import pubsub from "pubsub-js";

// 暴露Itme
export default {
  name: "ThingItem",
  // 接收things, 然后分为一件一件的thing
  props: ["thing"],
  data() {
    return {
      newName: "",
    };
  },
  methods: {
    change(id) {		// 改变complete. 传入当前数据的id
      //将id传到父级(List)
      // this.changeCheck( id )
      this.$bus.$emit("changeCheck", id);
    },
    del(id) {		// 删除一个数据
      if (confirm("确定删除该事件吗? 删除后不可恢复"))
        pubsub.publish("delThing", id);
    },
    edit(thing) {		// 编辑数据
      // 初始没有编辑属性, 当点击编辑在添加上去. 不要直接添加(因为直接添加不是响应式, 没有getter, setter), 如下:
      // thing.isEdit = true;
      // 使用set 或 $set 方法添加
      if (thing.hasOwnProperty("isEdit")) {
        // 因为编辑是后面追加的, 所以需要判断有没有编辑属性. 如果有就不要再追加了
        thing.isEdit = true;
      } else {
        this.$set(thing, "isEdit", true);
      }
      // 点击编辑时input框自动获取焦点.
      // $nextTick函数会等待DOM结构渲染完毕(模板解析完毕)再执行
      this.$nextTick(() => {
        this.$refs.editInp.focus();
      });
    },
    blur(thing, e) {		// 失去焦点就保存编辑
      // 传入默认事件参数, 并e.target.value获取到最新值
      // 先改变编辑状态, 否则下面的逻辑可能会一直执行
      thing.isEdit = false;
      // 判断是否为空
      if (!e.target.value.trim()) {
        // 为空让用户选择是否删除
        if (confirm("您将内容编辑为了空, 是要删除它? 按确定即可删除")) {
          this.del(thing.id);
        }
        // return alert( '编辑内容不能为空' );
      } else {
        // 用事件总线将修改后的数据传给App
        this.$bus.$emit("updateName", thing.id, e.target.value);
      }
    },
  },
};
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    cursor: pointer;
  }
  li label input {
    margin-right: 5px;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover {
    background-color: rgb(221, 221, 221);
  }
  li:hover button {
    display: block;
  }
</style>
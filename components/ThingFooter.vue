<template>
    <div class="todo-footer" v-if="total">
        <label>
        <!-- <input type="checkbox" :checked="isAll" @click="comp"/> -->
        <!-- 因为它是一个输入框, 并且是一个checkbox, 所以使用v-model会更好 -->
        <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <!-- 展示thing总数以及完成情况 -->
            <span>已完成{{ thingsTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clean">清除已完成任务</button>
    </div>
</template>

<script>

    // 暴露Footer
    export default {
        name: 'ThingsFooter',
        // 收到things
        props: [ 'things' ],
        // 计算已完成项
        computed: {
            //统计总数
            total() {
                return this.things.length;
            },
            //统计已完成的数量
            thingsTotal() {
                // 使用reduce方法进行统计, 用一个变量接收统计值. pre为之前的值(第一次则为初始值, 就是reduce函数的第二个参数, 这里是 0), current为当前值
                // const total = this.things.reduce((pre, current) => {
                // 返回之前值加当前值. 如果当前值的complete为真, 则 + 1, 否则 + 0 
                //     return pre + (current.complete ? 1 : 0);
                // }, 0);
                // 返回存储变量(computed必须要有返回值)
                // return total;

                // 简写形式
                return this.things.reduce( ( pre, current ) => pre + ( current.complete ? 1 : 0 ), 0 );
            },
            // 统计是否全部已完成
            // isAll(){ 
            //     return  this.total === this.thingsTotal && this.total !== 0;
            // },
            // 上方属于computed的中的函数的简写方式, 如果需要修改数据就要用完整写法. 如下:
            isAll: { 
                // getter用于读取数据初始值
                get() {
                    return  this.total === this.thingsTotal && this.total !== 0;
                },
                // setter用于修改数据. 由于setter可以收到一个参数, 而且就是checkbox的布尔值, 所以直接调用App的方法改变而不需要用事件参数(event)来获取checked  
                set( val ) {
                    this.$emit( 'compAllThing', val )
                }
            }
        },
        methods: {
            // 可以实现, 但略显复杂
            // compAll(e){
            //     this.things.forEach(t => {
            // 收到事件的checked值, 返回 t or f
            //         return e.target.checked ? ( t.complete = true ) : ( t.complete = false )
            //     });
            // },
            // 清除完成的thing
            clean() {
                if( confirm( '确定删除所有已完成的事件吗? 删除后不可恢复!' ) ) this.$emit( 'cleanComp' )
                
            }
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>
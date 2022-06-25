// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 关闭Vue控制台提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
	el: '#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this  // 安装事件总线
	},
});

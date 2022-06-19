(function(t){function n(n){for(var i,s,a=n[0],c=n[1],l=n[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(i=!1)}i&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},o={index:0},r=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"005a":function(t,n,e){"use strict";e("ed27")},"00f7":function(t,n,e){},"034f":function(t,n,e){"use strict";e("85ec")},"1ca2":function(t,n,e){},3051:function(t,n,e){"use strict";e("1ca2")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"root"}},[e("div",{staticClass:"todo-container"},[e("div",{staticClass:"todo-wrap"},[e("ThingHeader",{attrs:{things:t.things},on:{addThing:t.addThing}}),e("ThingList",{attrs:{things:t.things}}),e("ThingFooter",{attrs:{things:t.things},on:{compAllThing:t.compAllThing,cleanComp:t.cleanComp}})],1)])])},r=[],s=(e("d3b7"),e("159b"),e("4de4"),e("b0c0"),e("e9c4"),e("0990")),a=e.n(s),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"todo-header"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{type:"text",placeholder:"请输入事件名称，按回车键确认"},domProps:{value:t.val},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.addThings.apply(null,arguments)},input:function(n){n.target.composing||(t.val=n.target.value)}}})])},l=[],u=(e("498a"),e("288f")),h={name:"ThingsHeader",props:["things"],data:function(){return{val:""}},methods:{addThings:function(t){if(!this.val.trim())return alert("输入不能为空");var n={id:Object(u["a"])(),name:this.val,complete:!1};this.$emit("addThing",n),this.val=""}}},d=h,f=(e("005a"),e("2877")),p=Object(f["a"])(d,c,l,!1,null,"1f754cab",null),g=p.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"todo-main"},t._l(t.things,(function(t){return e("ThingItem",{key:t.id,attrs:{thing:t}})})),1)},b=[],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("label",[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.thing.complete},on:{change:function(n){return t.change(t.thing.id)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.thing.isEdit,expression:"!thing.isEdit"}]},[t._v(t._s(t.thing.name))]),e("input",{directives:[{name:"show",rawName:"v-show",value:t.thing.isEdit,expression:"thing.isEdit"}],ref:"editInp",attrs:{type:"text"},domProps:{value:t.thing.name},on:{blur:function(n){return t.blur(t.thing,n)},keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.blur(t.thing,n)}}})]),e("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.del(t.thing.id)}}},[t._v("删除")]),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.thing.isEdit,expression:"!thing.isEdit"}],staticClass:"btn btn-dange btn-edit",on:{click:function(n){return t.edit(t.thing)}}},[t._v(" 编辑 ")])])},y=[],T={name:"ThingItem",props:["thing"],data:function(){return{newName:""}},methods:{change:function(t){this.$bus.$emit("changeCheck",t)},del:function(t){confirm("确定删除该事件吗? 删除后不可恢复")&&a.a.publish("delThing",t)},edit:function(t){var n=this;t.hasOwnProperty("isEdit")?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){n.$refs.editInp.focus()}))},blur:function(t,n){t.isEdit=!1,n.target.value.trim()?this.$bus.$emit("updateName",t.id,n.target.value):confirm("您将内容编辑为了空, 是要删除它? 按确定即可删除")&&this.del(t.id)}}},_=T,k=(e("5ec7"),Object(f["a"])(_,v,y,!1,null,"e44ff208",null)),w=k.exports,x={name:"ThingList",components:{ThingItem:w},props:["things"]},$=x,O=(e("3051"),Object(f["a"])($,m,b,!1,null,"4d4d8e9d",null)),C=O.exports,E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.total?e("div",{staticClass:"todo-footer"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(n){var e=t.isAll,i=n.target,o=!!i.checked;if(Array.isArray(e)){var r=null,s=t._i(e,r);i.checked?s<0&&(t.isAll=e.concat([r])):s>-1&&(t.isAll=e.slice(0,s).concat(e.slice(s+1)))}else t.isAll=o}}})]),e("span",[e("span",[t._v("已完成"+t._s(t.thingsTotal))]),t._v(" / 全部"+t._s(t.total)+" ")]),e("button",{staticClass:"btn btn-danger",on:{click:t.clean}},[t._v("清除已完成任务")])]):t._e()},A=[],j={name:"ThingsFooter",props:["things"],computed:{total:function(){return this.things.length},thingsTotal:function(){return this.things.reduce((function(t,n){return t+(n.complete?1:0)}),0)},isAll:{get:function(){return this.total===this.thingsTotal&&0!==this.total},set:function(t){this.$emit("compAllThing",t)}}},methods:{clean:function(){confirm("确定删除所有已完成的事件吗? 删除后不可恢复!")&&this.$emit("cleanComp")}}},N=j,P=(e("7be9"),Object(f["a"])(N,E,A,!1,null,"1ed141f1",null)),S=P.exports,I={name:"App",components:{ThingHeader:g,ThingList:C,ThingFooter:S},data:function(){return{things:JSON.parse(localStorage.getItem("things"))||[]}},methods:{addThing:function(t){this.things.unshift(t)},changeCheck:function(t){this.things.forEach((function(n){n.id===t&&(n.complete=!n.complete)}))},delThing:function(t,n){this.things=this.things.filter((function(t){return t.id!==n}))},updateName:function(t,n){this.things.forEach((function(e){e.id===t&&(e.name=n)}))},compAllThing:function(t){this.things.forEach((function(n){n.complete=t}))},cleanComp:function(){this.things=this.things.filter((function(t){return!t.complete}))}},watch:{things:{deep:!0,handler:function(t){localStorage.setItem("things",JSON.stringify(t))}}},mounted:function(){this.$bus.$on("changeCheck",this.changeCheck),this.pubDelThing=a.a.subscribe("delThing",this.delThing),this.$bus.$on("updateName",this.updateName)},beforeDestroy:function(){this.$bus.$off("changeCheck"),this.$bus.$off("updateName"),a.a.unsubscribe(pubDelThing)}},J=I,M=(e("034f"),Object(f["a"])(J,o,r,!1,null,null,null)),D=M.exports;i["a"].config.productionTip=!1,new i["a"]({el:"#app",render:function(t){return t(D)},beforeCreate:function(){i["a"].prototype.$bus=this}})},"5ec7":function(t,n,e){"use strict";e("7eb8")},"7be9":function(t,n,e){"use strict";e("00f7")},"7eb8":function(t,n,e){},"85ec":function(t,n,e){},ed27:function(t,n,e){}});
//# sourceMappingURL=index.a9e64621.js.map
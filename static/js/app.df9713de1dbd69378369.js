webpackJsonp([1],{"44Lb":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"todoList",function(){return R}),n.d(i,"currentItem",function(){return N}),n.d(i,"currentIndex",function(){return S});var o={};n.d(o,"saveTodoItem",function(){return F}),n.d(o,"editTodoItem",function(){return V}),n.d(o,"deleteTodoItem",function(){return A});var s=n("/5sW");function r(t,e){return t+Math.floor(Math.random()*(e-t+1))}var a={name:"todoHeader",data:function(){return{motto:["一寸光阴一寸金，寸金难买寸光阴","劝君莫惜金缕衣，劝君惜取少年时","莫等闲，白了少年头，空悲切","盛年不重来，一日难再晨","花有重开日，人无再少年","少年易学老难成，一寸光阴不可轻","水去日日流，花落日日少","我生待明日，万事成蹉跎"],mottoIndex:0}},created:function(){this._changeMottoIndex()},mounted:function(){var t=this;setTimeout(function e(){t._changeMottoIndex(),setTimeout(e,5e3)},5e3)},methods:{_changeMottoIndex:function(){for(var t=r(0,this.motto.length-1);t===this.mottoIndex;)t=r(0,this.motto.length-1);this.mottoIndex=t}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"todo-list__header"},[n("h1",{staticClass:"todo-list__title"},[t._v("TODO")]),t._v(" "),n("transition-group",{attrs:{name:"fadeIn",mode:"in-out",tag:"div",appear:""}},t._l(t.motto,function(e,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:i===t.mottoIndex,expression:"index === mottoIndex"}],key:e,staticClass:"todo-list__motto"},[t._v(t._s(e))])}))],1)},staticRenderFns:[]};var u={name:"App",components:{TodoHeader:n("VU/8")(a,c,!1,function(t){n("rkyn")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("todo-header"),this._v(" "),e("div",{staticClass:"todo-list__router-wrapper"},[e("router-view")],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,l,!1,function(t){n("44Lb")},null,null).exports,_=n("/ocq"),m=n("woOf"),v=n.n(m),f=n("Dd8w"),T=n.n(f),h=n("NYxO"),I={name:"SetPage",data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:T()({content:function(){var t="";try{t=this.currentItem.content}catch(e){t=""}return t},dateStr:function(){try{if(!this.currentItem.overTime.dateObj)throw new Error("no date");return this.currentItem.overTime.year+"-"+this.currentItem.overTime.month+"-"+this.currentItem.overTime.date}catch(t){return"无过期时间"}},comment:function(){return this.currentItem.comment}},Object(h.c)(["currentIndex","currentItem"])),created:function(){this.currentItem||this.$router.push("/")},methods:T()({changeTask:function(){console.log(1)},showDatePicker:function(){var t=this;weui.datePicker({start:new Date,end:2030,onConfirm:function(e){var n={overTime:{}};n.overTime.year=e[0].value,n.overTime.month=e[1].value,n.overTime.date=e[2].value,n.overTime.dateObj=new Date(n.overTime.year+"/"+n.overTime.month+"/"+n.overTime.date);var i=v()({},t.currentItem,n);console.log(i),t.editTodoItem({newItem:i,index:t.currentIndex}),t.setCurrentItem(i)}})},confirm:function(){var t=this.$refs.taskTitle.value,e=this.$refs.taskComment.value;if(this.currentItem.content!==t||this.currentItem.content!==e){var n=v()({},this.currentItem,{content:t,comment:e});this.editTodoItem({newItem:n,index:this.currentIndex})}this.$router.push("/")},del:function(){this.deleteTodoItem(),this.$router.push("/")}},Object(h.d)({setCurrentItem:"SET_CURRENT_ITEM",delTodoItem:"DEL_TODO_ITEM"}),Object(h.b)(["editTodoItem","deleteTodoItem"]))},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slip"}},[n("div",{staticClass:"todolist__set-page"},[n("div",{staticClass:"weui-cells weui-cells_form"},[n("div",{staticClass:"weui-cell"},[n("div",{staticClass:"weui-cell__hd"},[n("label",{staticClass:"weui-label"},[t._v("任务")])]),t._v(" "),n("div",{staticClass:"weui-cell__bd"},[n("input",{ref:"taskTitle",staticClass:"weui-input",attrs:{type:"text",placeholder:"请填写任务名称"},domProps:{value:t.content},on:{input:t.changeTask}})])]),t._v(" "),n("div",{staticClass:"weui-cell"},[n("div",{staticClass:"weui-cell__hd"},[n("label",{staticClass:"weui-label",attrs:{value:"1997-12-01"}},[t._v("结束日期")])]),t._v(" "),n("div",{staticClass:"weui-cell__bd"},[n("p",{on:{click:t.showDatePicker}},[t._v(t._s(t.dateStr))])])]),t._v(" "),n("div",{staticClass:"weui-cell"},[n("div",{staticClass:"weui-cell__bd"},[n("textarea",{ref:"taskComment",staticClass:"weui-textarea",attrs:{placeholder:"备注",rows:"3"},domProps:{innerHTML:t._s(t.comment)}}),t._v(" "),n("div",{staticClass:"weui-textarea-counter"},[n("span",[t._v("0")]),t._v("/200")])])])]),t._v(" "),n("div",{staticClass:"weui-btn-area"},[n("button",{staticClass:"weui-btn weui-btn_primary",on:{click:t.confirm}},[t._v("确定")]),t._v(" "),n("button",{staticClass:"weui-btn weui-btn_warn",on:{click:t.del}},[t._v("删除")])])])])},staticRenderFns:[]};var w=n("VU/8")(I,p,!1,function(t){n("waTV")},"data-v-a12c81e8",null).exports,C={name:"todoList",data:function(){return{staff:""}},computed:T()({},Object(h.c)(["todoList"])),methods:T()({addTodo:function(){this.staff&&(this.saveTodoItem(this._initTodoData(this.staff)),this.staff="")},toggleCheck:function(t,e){t.isFinish=!t.isFinish,this.editTodoItem({newItem:t,index:e})},getItemStyle:function(t){return t.isFinish?{textDecoration:"line-through",color:"#e1e1e1"}:{}},goToDetail:function(t,e){this.setCurrentItem(t),this.setCurrentIndex(e),this.$router.push("/"+t.id)},_initTodoData:function(t){return{id:encodeURIComponent(t).concat(Date.now()),isFinish:!1,overTime:{year:null,month:null,date:null,dateObj:null},content:t,comment:""}}},Object(h.b)(["saveTodoItem","editTodoItem"]),Object(h.d)({setCurrentItem:"SET_CURRENT_ITEM",setCurrentIndex:"SET_CURRENT_INDEX"}))},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slip-reverse"}},[n("div",{staticClass:"todo-list__wrapper"},[n("div",{staticClass:"weui-cells\n              todo-list__search-wrapper"},[n("div",{staticClass:"weui-cell"},[n("div",{staticClass:"weui-cell__bd"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.staff,expression:"staff"}],staticClass:"weui-input\n                      todo-list__input",attrs:{type:"text",placeholder:"请输入待办事项"},domProps:{value:t.staff},on:{input:function(e){e.target.composing||(t.staff=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"weui-btn\n                     weui-btn_mini\n                     weui-btn_primary",on:{click:t.addTodo}},[t._v("确认")])])]),t._v(" "),n("div",{staticClass:"weui-cells\n              todo-list__list-wrapper"},t._l(t.todoList,function(e,i){return e?n("div",{key:e.id,staticClass:"weui-cell\n                weui-cells_checkbox\n                todo-list__list-item-wrapper"},[n("label",{staticClass:"weui-check__label"},[n("div",{staticClass:"weui-cell__hd"},[n("input",{staticClass:"weui-check",attrs:{type:"checkbox"},domProps:{checked:e.isFinish},on:{click:function(n){t.toggleCheck(e,i)}}}),t._v(" "),n("i",{staticClass:"weui-icon-checked"})])]),t._v(" "),n("div",{staticClass:"weui-cell_access\n                  weui-cell__bd\n                  weui-flex",on:{click:function(n){t.goToDetail(e,i)}}},[n("a",{staticClass:"weui-cell__bd"},[n("p",{style:t.getItemStyle(e),domProps:{innerHTML:t._s(e.content)}})]),t._v(" "),n("div",{staticClass:"weui-cell__ft"})])]):t._e()}))])])},staticRenderFns:[]};var D=n("VU/8")(C,E,!1,function(t){n("yfEi")},null,null).exports;s.a.use(_.a);var O=new _.a({mode:"history",routes:[{path:"/",name:"TodoList",component:D},{path:"/:id",name:"SetPage",component:w}]}),b=n("MfZv"),x=n.n(b),g="__TODO_LIST__";function k(){return x.a.get(g,[])}function M(t){x.a.set(g,t)}var y={todos:k(),currentItem:null,currentIndex:-1};function R(t){return t.todos}function N(t){return t.currentItem}function S(t){return t.currentIndex}var L,U=n("bOdI"),j=n.n(U),P={ADD_TODO_ITEM:"ADD_TODO_ITEM",EDIT_TODO_ITEM:"EDIT_TODO_ITEM",SET_CURRENT_ITEM:"SET_CURRENT_ITEM",SET_CURRENT_INDEX:"SET_CURRENT_INDEX",DEL_TODO_ITEM:"DEL_TODO_ITEM"},$=(L={},j()(L,P.ADD_TODO_ITEM,function(t,e){t.todos.push(e)}),j()(L,P.EDIT_TODO_ITEM,function(t,e){var n=e.newItem,i=e.index;t.todos.splice(i,1,n)}),j()(L,P.SET_CURRENT_ITEM,function(t,e){t.currentItem=e}),j()(L,P.SET_CURRENT_INDEX,function(t,e){t.currentIndex=e}),j()(L,P.DEL_TODO_ITEM,function(t,e){t.todos.splice(e,1)}),L);function F(t,e){var n=t.commit,i=t.state;n(P.ADD_TODO_ITEM,e),M(i.todos)}function V(t,e){var n=t.commit,i=t.state,o=e.newItem,s=e.index;n(P.EDIT_TODO_ITEM,{newItem:o,index:s}),M(i.todos)}function A(t){var e=t.commit,n=t.state;e(P.DEL_TODO_ITEM,n.currentIndex),M(n.todos)}n("sax8");s.a.use(h.a);var H=new h.a.Store({state:y,getters:i,mutations:$,actions:o,strict:!1,plugins:[]}),X=n("v5o6");n.n(X).a.attach(document.body),s.a.config.productionTip=!1,new s.a({el:"#app",router:O,render:function(t){return t(d)},store:H})},rkyn:function(t,e){},waTV:function(t,e){},yfEi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.df9713de1dbd69378369.js.map
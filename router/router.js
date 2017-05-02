import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//一级页面
import prompt from "views/prompt.vue";
import slider_delete from "views/slider_delete.vue";
import address_select from "views/address_select.vue";
//异步按需加载
const router = new VueRouter({
	routes:[{
		path:"",
		redirect:"/address_select",
	},{
		path:"/prompt",
		component:prompt,
	},{
		path:"/slider_delete",
		component:slider_delete,
	},{
		path:"/address_select",
		component:address_select,
	}]
});

export default router
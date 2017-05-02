import Vue from "vue/dist/vue.js";
import router from "router/router.js";

//组件
import SliderDelete from "views/slider_delete.vue";
new Vue({
	el:"#app",
	template:"<router-view></router-view>",
	router,
});
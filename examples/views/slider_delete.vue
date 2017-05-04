<template>
	<div class="delete_div">
		<slider_delete :sliderConf="sliderConf">
			<div class="content"></div>
		</slider_delete>
		<div class="delete_button"></div>
	</div>
</template>
<script>
	import SliderDelete from "components/slider_delete.vue";
	export default({
		data(){
			return {
				sliderConf:{//滑动配置
					distance:1.4,
				}
			}
		},
		components:{
			"slider_delete":SliderDelete,
		}
	})
</script>
<style>
	.content{
		background-color: black;
		width: 10rem;
		height: 3rem;
	}
	.delete_button{
		position: absolute;
		background-color: red;
		right: 0;
		width: 1.4rem;
		height: 3rem;
	}
	.delete_div{
		position: relative;
	}
</style>
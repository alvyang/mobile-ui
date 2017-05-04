<template>
	<div>
		<div style="width: 10rem;height: 5rem;" @click="clickMe">click me</div>
		<jf-prompt :message="message"></jf-prompt>
	</div>
</template>
<script>
	import Prompt from "components/prompt.vue";
	export default({
		data(){
			return {
				message:"",
			}
		},
		methods:{
			clickMe(){
				this.message="这里是提示信息";
			}
		},
		components:{
			"jf-prompt":Prompt,
		}
	});
</script>
<style>
	
</style>
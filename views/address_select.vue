<template>
	<div>
		<div style="width: 10rem;height: 5rem;" @click="clickMe">click me</div>
		<address-select
			:data="data"></address-select>
	</div>
</template>
<script>
	import address_select from "components/address_select.vue";
	export default({
		data(){
			return {
				data:[],
			}
		},
		mounted(){
			var _self = this;
			$.getJSON("db/address.json",function (data) {
                _self.data = data;
            });
		},
		methods:{
			clickMe(){
				
			}
		},
		components:{
			"address-select":address_select,
		}
	});
</script>

<style>
</style>
<template>
	<div class="address_select">
		<div class="address_operation">
			<button @click="cancelAddress">取消</button>
			<button @click="selectAddress">确定</button>
		</div>
		<div class="address_roll">
			<div>
				<div class='gear address_province'
					@touchstart="touchStart($event)" 
					@touchend="touchEnd($event)"
					@touchmove="touchMove($event)">
					<div v-for="p in province" class='tooth' :ref="p.code">{{p.name}}</div>
				</div>
			 	<div class='select_area'></div>
			</div>
			<div>
				<div class='gear address_city'
					@touchstart="touchStart($event)" 
					@touchend="touchEnd($event)"
					@touchmove="touchMove($event)">
					<div v-for="c in city" class='tooth' :ref="c.code">{{c.name}}</div>
				</div>
			 	<div class='select_area'></div>
			</div>
			<div>
				<div class='gear address_county'
					@touchstart="touchStart($event)" 
					@touchend="touchEnd($event)"
					@touchmove="touchMove($event)">
					<div v-for="c in county" class='tooth' :ref="c.code">{{c.name}}</div>
				</div>
			 	<div class='select_area'></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default({
		name:"MoAddressSelect",
		data(){
			return {
				index:[0,0,0],//选中的下标
				code:[0,0,0],//选中的code
				name:["","",""],//选中的name
				province:[],//省
				city:[],//市
				county:[],//区
			};
		},
		props:['data'],
		watch:{
			data:{
	    		handler(val, oldVal){
	    			//默认
	    			this.setAddressData();
	    		}
	    	}
		},
		methods:{
			cancelAddress(){
				
			},
			selectAddress(){
				var x = this.index[0],y=this.index[1],z=this.index[2];
				this.code[0] = this.province[x].code;
				this.name[0] = this.province[x].name;
				if(this.city.length > 0){
					this.code[1] = this.city[y].code;
					this.name[1] = this.city[y].name;
				}
				if(this.county.length > 0){
					this.code[2] = this.county[z].code;
					this.name[2] = this.county[z].name;
				}
				console.log(this.code);
				console.log(this.name);
			},
			touchStart(e){
				e.preventDefault();
				for(var b = e.target;;){
					if(b.classList.contains("gear")) break;
					b = b.parentElement;
				}
				b["old_" + b.id] = e.targetTouches[0].screenY;//记录手指触摸的初始位置 
				b["o_t_" + b.id] = (new Date).getTime();//记录手指开始触摸的时间
				var currentTop = b.getAttribute("top");//获取当前高度
				if(currentTop){//记录当前高度
					b["o_d_" + b.id] = parseFloat(currentTop.replace(/rem/g, ""));
				}else{
					b["o_d_" + b.id] = 0;
				}
			},
			touchMove(e){
				e.preventDefault();
				for(var b = e.target;;){
					if(b.classList.contains("gear")) break;
					b = b.parentElement;
				}
				b["new_" + b.id] = e.targetTouches[0].screenY;//手指滑动的当前位置
				b["n_t_" + b.id] = (new Date).getTime();//手指滑动的当前时间
				//计算出手指滑动的距离,75 为设计稿宽度/10
				var gap = (b["new_" + b.id] - b["old_" + b.id])/75;
				b["pos_" + b.id] = b["o_d_" + b.id] + gap; 
				b.style["-webkit-transform"] = "translate3d(0," + b["pos_" + b.id] + "rem,0)";
				b.setAttribute("top", b["pos_" + b.id] + "rem");
			},
			touchEnd(e){
				e.preventDefault();
				for(var b = e.target;;){
					if(b.classList.contains("gear")) break;
					b = b.parentElement;
				}
				//滑动结束时，计算单位毫秒（ms）内，手指滑动的距离
//				var speed = (b["new_" + b.id] - b["old_" + b.id]) / (b["n_t_" + b.id] - b["o_t_" + b.id]);
//				b["spd_" + b.id] = speed;
		
				var pos = Math.round(b["pos_" + b.id]/1.3)*1.3;
				//pos大于0,说明到了最上面。强制显示第一条数据。flag做标识
				var flag = 0;
				if(pos > 0){
					pos = 0;
					flag = !0;
				}
				var gearMax = (b.children.length - 1) * 1.3;//35表示css高度
				//pos小于最大值，说明到了最下面。强制显示最后一条数据。flag做标识
				gearMax < Math.abs(pos) && (pos = -gearMax, flag = !0);
				
				b["pos_" + b.id] = pos;
				b.style["-webkit-transform"] = "translate3d(0," + pos + "rem,0)";
				b.setAttribute("top", pos + "rem");
				
				if(b.classList.contains("address_province")){
					this.index[0] = Math.round(Math.abs(pos/1.3));
					this.index[1] = 0;
					this.index[2] = 0;
					var city = document.querySelector(".address_city");
					var county = document.querySelector(".address_county");
					city.style["-webkit-transform"] = "translate3d(0,0,0)";
					county.style["-webkit-transform"] = "translate3d(0,0,0)";
				}else if(b.classList.contains("address_city")){
					this.index[1] = Math.round(Math.abs(pos/1.3));
					this.index[2] = 0;
					var county = document.querySelector(".address_county");
					county.style["-webkit-transform"] = "translate3d(0,0,0)";
				}else if(b.classList.contains("address_county")){
					this.index[2] = Math.round(Math.abs(pos/1.3));
				} 
				this.setAddressData();
			},
			setAddressData(){
				this.province = this.data;
				if(this.data[this.index[0]] != undefined){
					this.city = this.data[this.index[0]].child_code;
				}else{
					this.city = [];
				}
				if(this.data[this.index[0]] != undefined && this.data[this.index[0]].child_code[this.index[1]] != undefined){
					this.county = this.data[this.index[0]].child_code[this.index[1]].child_code;
				}else{
					this.county = [];
				}
			}
		}
	});
</script>
<style scoped="scoped">
	/*地址选择样式 start*/
	.address_roll{
		display: -webkit-box;
		width: 100%;
		height: auto;
		overflow: hidden;
		font-weight: bold;
		font-size: 0;
	    -webkit-mask: -webkit-linear-gradient(top, #debb47 50%, rgba(36, 142, 36, 0));
	}
	.address_roll > div{
		position: relative;
		-webkit-box-flex:1;
		width: 33.33%;
		height: 4.5rem;
		font-size: 0.45rem;
		text-align: center;
	    -webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));
	
	}
	.tooth{
		height: 1.3rem;
		line-height: 1.3rem;
		overflow: hidden;
	}
	.gear{
	    position: absolute;
	    margin-top: 1.6rem;
	    z-index: 2;
	    width: 100%;
	}
	.address_province,.address_city,.address_county{
	}
	/*地址选择样式 end*/
	/*地址选择器地址部分*/
	.select_area{
		position: absolute;
	    top: 1.6rem;
	    width: 100%;
	    margin: 0;
	    height: 1.3rem;
	    box-sizing: border-box;
	    z-index: 0;
	    border-top: 1px solid #e6e6e6;
	    border-bottom: 1px solid #e6e6e6;
	}
	/*地址选择器按钮部分样式*/
	.address_operation{
		width: 10rem;
		height: 1.5rem;
	}
	.address_operation button{
		width: 2rem;
		height: 1.1rem;
		line-height: 1.1rem;
		margin: 0.2rem;
		text-align: center;
		border-radius: 5px;
		background-color: #f24040;
		color: #ffffff;
		outline: none;
		border: none;
		font-size: 0.45rem;
	}
	.address_operation button:nth-child(1){
		float: left;
	}
	.address_operation button:nth-child(2){
		float: right;
	}
	/*地址选择器定位*/
	.address_select{
		position: fixed;
		background-color: #ffffff;
		width: 10rem;
		height: 6rem;
		bottom: 0px;
		font-size: 0;
		z-index: 1000;
	}
</style>
// 导入 Vue.js 和组件，进行测试
import { createVue, destroyVM } from '../util';
import SliderDelete from '../../packages/slider-delete'

// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。
describe('SliderDelete', () => {
	let vm;
	
	afterEach(() => {
	    destroyVM(vm);
	});
	
	// 检查样式
	it('slider delete', () => {
	    vm = createVue({
	      	template: `
		        <div class="delete_div">
		          <slider-delete>
		          	<div class="content"></div>
		          </slider-delete>
		          <div class="delete_button"></div>
		        </div>
	      	`,
	      	
			components:{
				"slider-delete":SliderDelete,
			}
	    }, true);
	});
})
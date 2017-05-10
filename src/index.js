import AddressSelect from '../packages/address-select/index.js';
import Prompt from '../packages/prompt/index.js';
import SliderDelete from '../packages/slider-delete/index.js';

const components = [
	AddressSelect,
	Prompt,
	SliderDelete,
]

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
	AddressSelect,
	install,
	Prompt,
	SliderDelete,
}
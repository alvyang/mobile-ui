import MoAddressSelect from './src/address-select';

/* istanbul ignore next */
MoAddressSelect.install = function(Vue) {
  Vue.component(MoAddressSelect.name, MoAddressSelect);
};

export default MoAddressSelect;
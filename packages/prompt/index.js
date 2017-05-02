import MoPrompt from './src/prompt';

/* istanbul ignore next */
MoPrompt.install = function(Vue) {
  Vue.component(MoPrompt.name, MoPrompt);
};

export default MoPrompt;

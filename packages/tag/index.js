import GpzxTag from './src/tag';

/* istanbul ignore next */
GpzxTag.install = function(Vue) {
  Vue.component(GpzxTag.name, GpzxTag);
};

export default GpzxTag;

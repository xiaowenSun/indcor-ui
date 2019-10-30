import GpzxProgress from './src/progress';

/* istanbul ignore next */
GpzxProgress.install = function(Vue) {
  Vue.component(GpzxProgress.name, GpzxProgress);
};

export default GpzxProgress;

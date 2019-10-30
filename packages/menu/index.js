import GpzxMenu from './src/menu';

/* istanbul ignore next */
GpzxMenu.install = function(Vue) {
  Vue.component(GpzxMenu.name, GpzxMenu);
};

export default GpzxMenu;

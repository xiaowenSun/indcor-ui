import GpzxAutocomplete from './src/autocomplete';

/* istanbul ignore next */
GpzxAutocomplete.install = function(Vue) {
  Vue.component(GpzxAutocomplete.name, GpzxAutocomplete);
};

export default GpzxAutocomplete;

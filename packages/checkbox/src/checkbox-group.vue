<script>
  import Emitter from 'gpzx-ui/src/mixins/emitter';

  export default {
    name: 'GpzxCheckboxGroup',

    componentName: 'GpzxCheckboxGroup',

    mixins: [Emitter],

    inject: {
      gpzxFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('GpzxFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="gpzx-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

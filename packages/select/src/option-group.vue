<template>
  <ul class="gpzx-select-group__wrap" v-show="visible">
    <li class="gpzx-select-group__title">{{ label }}</li>
    <li>
      <ul class="gpzx-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'gpzx-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'GpzxOptionGroup',

    componentName: 'GpzxOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('GpzxOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('GpzxOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>

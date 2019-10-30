<template>
  <li
    class="gpzx-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'gpzx-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'gpzx-ui/src/mixins/emitter';

  export default {
    name: 'GpzxDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('GpzxDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>

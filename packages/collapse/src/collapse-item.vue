<template>
  <div class="gpzx-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`gpzx-collapse-content-${id}`"
      :aria-describedby ="`gpzx-collapse-content-${id}`"
    >
      <div
        class="gpzx-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`gpzx-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="gpzx-collapse-item__arrow gpzx-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <gpzx-collapse-transition>
      <div
        class="gpzx-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`gpzx-collapse-head-${id}`"
        :id="`gpzx-collapse-content-${id}`"
      >
        <div class="gpzx-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </gpzx-collapse-transition>
  </div>
</template>
<script>
  import GpzxCollapseTransition from 'gpzx-ui/src/transitions/collapse-transition';
  import Emitter from 'gpzx-ui/src/mixins/emitter';
  import { generateId } from 'gpzx-ui/src/utils/util';

  export default {
    name: 'GpzxCollapseItem',

    componentName: 'GpzxCollapseItem',

    mixins: [Emitter],

    components: { GpzxCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('GpzxCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('GpzxCollapse', 'item-click', this);
      }
    }
  };
</script>

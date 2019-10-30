<template>
  <transition
    name="gpzx-drawer-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      class="gpzx-dialog__wrapper"
      role="presentation"
      v-show="visible">
      <div
        class="gpzx-drawer__container"
        :class="visible && 'gpzx-drawer__open'"
        @click.self="handleWrapperClick"
        role="document"
        tabindex="-1">
        <div
          aria-modal="true"
          aria-labelledby="gpzx-drawer__title"
          class="gpzx-drawer"
          :class="[direction, customClass]"
          :style="isHorizontal ? `width: ${size}` : `height: ${size}`"
          ref="drawer"
          role="presentation">
          <header class="gpzx-drawer__header" id="gpzx-drawer__title">
            <slot name="title">
              <span role="heading">{{ title }}</span>
            </slot>
            <button
              :aria-label="`close ${title || 'drawer'}`"
              class="gpzx-drawer__close-btn"
              type="button"
              v-if="showClose"
              @click="closeDrawer">
              <i class="gpzx-dialog__close gpzx-icon el-icon-close"></i>
            </button>
          </header>
          <section class="gpzx-drawer__body" v-if="rendered">
            <slot></slot>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'gpzx-ui/src/utils/popup';
import Migrating from 'gpzx-ui/src/mixins/migrating';
import emitter from 'gpzx-ui/src/mixins/emitter';

export default {
  name: 'GpzxDrawer',
  mixins: [Popup, emitter, Migrating],
  props: {
    appendToBody: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function
    },
    customClass: {
      type: String,
      default: ''
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'rtl',
      validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
      }
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isHorizontal() {
      return this.direction === 'rtl' || this.direction === 'ltr';
    }
  },
  data() {
    return {
      closed: false
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        if (!this.closed) this.$emit('close');
      }
    }
  },
  methods: {
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        if (this.destroyOnClose === true) {
          this.rendered = false;
        }
        this.closed = true;
      }
    },
    handleWrapperClick() {
      if (this.wrapperClosable) {
        this.closeDrawer();
      }
    },
    closeDrawer() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    }
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<template>
  <span class="gpzx-breadcrumb__item">
    <span
      :class="['gpzx-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="gpzx-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="gpzx-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'GpzxBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      };
    },

    inject: ['gpzxBreadcrumb'],

    mounted() {
      this.separator = this.gpzxBreadcrumb.separator;
      this.separatorClass = this.gpzxBreadcrumb.separatorClass;
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', _ => {
        const { to, $router } = this;
        if (!to || !$router) return;
        this.replace ? $router.replace(to) : $router.push(to);
      });
    }
  };
</script>

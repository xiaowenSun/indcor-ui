<template>
  <header class="gpzx-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'GpzxHeader',

    componentName: 'GpzxHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>

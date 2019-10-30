<template>
  <footer class="el-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'GpzxFooter',

    componentName: 'GpzxFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>

<template>
  <aside class="gpzx-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'GpzxAside',

    componentName: 'GpzxAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>

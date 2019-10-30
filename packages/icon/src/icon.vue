<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'GpzxIcon',

    props: {
      name: String
    }
  };
</script>

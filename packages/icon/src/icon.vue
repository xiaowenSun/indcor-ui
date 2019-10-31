<template>
  <i :class="'gpzx-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'GpzxIcon',

    props: {
      name: String
    }
  };
</script>

<template>
  <div class="gpzx-page-header">
    <div class="gpzx-page-header__left" @click="$emit('back')">
      <i class="el-icon-back"></i>
      <div class="gpzx-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="gpzx-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'gpzx-ui/src/locale';
export default {
  name: 'GpzxPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>

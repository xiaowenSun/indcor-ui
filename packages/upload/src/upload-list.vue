<template>
  <transition-group
    tag="ul"
    :class="[
      'gpzx-upload-list',
      'gpzx-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="el-list"
  >
    <li
      v-for="file in files"
      :class="['gpzx-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="gpzx-upload-list__item-thumbnail"
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          :src="file.url" alt=""
        >
        <a class="gpzx-upload-list__item-name" @click="handleClick(file)">
          <i class="gpzx-icon-document"></i>{{file.name}}
        </a>
        <label class="gpzx-upload-list__item-status-label">
          <i :class="{
            'gpzx-icon-upload-success': true,
            'gpzx-icon-circle-check': listType === 'text',
            'gpzx-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i class="gpzx-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
        <i class="gpzx-icon-close-tip" v-if="!disabled">{{ t('el.upload.deleteTip') }}</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <gpzx-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)">
        </gpzx-progress>
        <span class="gpzx-upload-list__item-actions" v-if="listType === 'picture-card'">
          <span
            class="gpzx-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="gpzx-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="gpzx-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="gpzx-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
  import Locale from 'gpzx-ui/src/mixins/locale';
  import GpzxProgress from 'gpzx-ui/packages/progress';

  export default {

    name: 'GpzxUploadList',

    mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: { GpzxProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>

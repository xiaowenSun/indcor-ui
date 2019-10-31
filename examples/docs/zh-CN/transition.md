## 内置过渡动画

GpzxUI 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 [transition 组件文档](https://cn.vuejs.org/v2/api/#transition) 。

### fade 淡入淡出

:::demo 提供 `gpzx-fade-in-linear` 和 `gpzx-fade-in` 两种效果。
```html
<template>
  <div>
    <gpzx-button @click="show = !show">Click Me</gpzx-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="gpzx-fade-in-linear">
        <div v-show="show" class="transition-box">.gpzx-fade-in-linear</div>
      </transition>
      <transition name="gpzx-fade-in">
        <div v-show="show" class="transition-box">.gpzx-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom 缩放

:::demo 提供 `gpzx-zoom-in-center`，`gpzx-zoom-in-top` 和 `gpzx-zoom-in-bottom` 三种效果。
```html
<template>
  <div>
    <gpzx-button @click="show2 = !show2">Click Me</gpzx-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="gpzx-zoom-in-center">
        <div v-show="show2" class="transition-box">.gpzx-zoom-in-center</div>
      </transition>

      <transition name="gpzx-zoom-in-top">
        <div v-show="show2" class="transition-box">.gpzx-zoom-in-top</div>
      </transition>

      <transition name="gpzx-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.gpzx-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse 展开折叠

使用 `gpzx-collapse-transition` 组件实现折叠展开效果。

:::demo
```html
<template>
  <div>
    <gpzx-button @click="show3 = !show3">Click Me</gpzx-button>

    <div style="margin-top: 20px; height: 200px;">
      <gpzx-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">gpzx-collapse-transition</div>
          <div class="transition-box">gpzx-collapse-transition</div>
        </div>
      </gpzx-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### 按需引入

```js
// fade/zoom 等
import 'gpzx-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'gpzx-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```

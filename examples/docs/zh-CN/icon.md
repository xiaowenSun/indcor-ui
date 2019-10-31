## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `gpzx-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="gpzx-icon-edit"></i>
<i class="gpzx-icon-share"></i>
<i class="gpzx-icon-delete"></i>
<gpzx-button type="primary" icon="gpzx-icon-search">搜索</gpzx-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'gpzx-icon-' + name"></i>
      <span class="icon-name">{{'gpzx-icon-' + name}}</span>
    </span>
  </li>
</ul>

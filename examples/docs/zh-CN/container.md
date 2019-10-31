## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<gpzx-container>`：外层容器。当子元素中包含 `<gpzx-header>` 或 `<gpzx-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<gpzx-header>`：顶栏容器。

`<gpzx-aside>`：侧边栏容器。

`<gpzx-main>`：主要区域容器。

`<gpzx-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<gpzx-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<gpzx-container>`。
:::

### 常见页面布局

:::demo
```html
<gpzx-container>
  <gpzx-header>Header1</gpzx-header>
  <gpzx-main>Main</gpzx-main>
</gpzx-container>

<gpzx-container>
  <gpzx-header>Header2</gpzx-header>
  <gpzx-main>Main</gpzx-main>
  <gpzx-footer>Footer</gpzx-footer>
</gpzx-container>

<gpzx-container direction="horizontal">
  <gpzx-aside width="200px">Aside3</gpzx-aside>
  <gpzx-main>Main</gpzx-main>
</gpzx-container>

<gpzx-container>
  <gpzx-header>Header4</gpzx-header>
  <gpzx-container direction="horizontal">
    <gpzx-aside width="200px">Aside</gpzx-aside>
    <gpzx-main>Main</gpzx-main>
  </gpzx-container>
</gpzx-container>

<gpzx-container>
  <gpzx-header>Header5</gpzx-header>
  <gpzx-container direction="horizontal">
    <gpzx-aside width="200px">Aside</gpzx-aside>
    <gpzx-container>
      <gpzx-main>Main</gpzx-main>
      <gpzx-footer>Footer</gpzx-footer>
    </gpzx-container>
  </gpzx-container>
</gpzx-container>

<gpzx-container direction="horizontal">
  <gpzx-aside width="200px">Aside</gpzx-aside>
  <gpzx-container>
    <gpzx-header>Header6</gpzx-header>
    <gpzx-main>Main</gpzx-main>
  </gpzx-container>
</gpzx-container>

<gpzx-container direction="horizontal">
  <gpzx-aside width="200px">Aside</gpzx-aside>
  <gpzx-container>
    <gpzx-header>Header7</gpzx-header>
    <gpzx-main>Main</gpzx-main>
    <gpzx-footer>Footer</gpzx-footer>
  </gpzx-container>
</gpzx-container>

<style>
  .gpzx-header, .gpzx-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .gpzx-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .gpzx-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .gpzx-container {
    margin-bottom: 40px;
  }
  
  .gpzx-container:nth-child(5) .gpzx-aside,
  .gpzx-container:nth-child(6) .gpzx-aside {
    line-height: 260px;
  }
  
  .gpzx-container:nth-child(7) .gpzx-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<gpzx-container style="height: 500px; border: 1px solid #eee" direction="horizontal">
  <gpzx-aside width="200px" style="background-color: rgb(238, 241, 246)" >
    <gpzx-menu :default-openeds="['1', '3']">
      <gpzx-submenu index="1">
        <template slot="title"><i class="gpzx-icon-message"></i>导航一</template>
        <gpzx-menu-item-group>
          <template slot="title">分组一</template>
          <gpzx-menu-item index="1-1">选项1</gpzx-menu-item>
          <gpzx-menu-item index="1-2">选项2</gpzx-menu-item>
        </gpzx-menu-item-group>
        <gpzx-menu-item-group title="分组2">
          <gpzx-menu-item index="1-3">选项3</gpzx-menu-item>
        </gpzx-menu-item-group>
        <gpzx-submenu index="1-4">
          <template slot="title">选项4</template>
          <gpzx-menu-item index="1-4-1">选项4-1</gpzx-menu-item>
        </gpzx-submenu>
      </gpzx-submenu>
      <gpzx-submenu index="2">
        <template slot="title"><i class="gpzx-icon-menu"></i>导航二</template>
        <gpzx-menu-item-group>
          <template slot="title">分组一</template>
          <gpzx-menu-item index="2-1">选项1</gpzx-menu-item>
          <gpzx-menu-item index="2-2">选项2</gpzx-menu-item>
        </gpzx-menu-item-group>
        <gpzx-menu-item-group title="分组2">
          <gpzx-menu-item index="2-3">选项3</gpzx-menu-item>
        </gpzx-menu-item-group>
        <gpzx-submenu index="2-4">
          <template slot="title">选项4</template>
          <gpzx-menu-item index="2-4-1">选项4-1</gpzx-menu-item>
        </gpzx-submenu>
      </gpzx-submenu>
      <gpzx-submenu index="3">
        <template slot="title"><i class="gpzx-icon-setting"></i>导航三</template>
        <gpzx-menu-item-group>
          <template slot="title">分组一</template>
          <gpzx-menu-item index="3-1">选项1</gpzx-menu-item>
          <gpzx-menu-item index="3-2">选项2</gpzx-menu-item>
        </gpzx-menu-item-group>
        <gpzx-menu-item-group title="分组2">
          <gpzx-menu-item index="3-3">选项3</gpzx-menu-item>
        </gpzx-menu-item-group>
        <gpzx-submenu index="3-4">
          <template slot="title">选项4</template>
          <gpzx-menu-item index="3-4-1">选项4-1</gpzx-menu-item>
        </gpzx-submenu>
      </gpzx-submenu>
    </gpzx-menu>
  </gpzx-aside>
  
  <gpzx-container style="height: 499px;">
    <gpzx-header style="text-align: right; font-size: 12px">
      <gpzx-dropdown>
        <i class="gpzx-icon-setting" style="margin-right: 15px"></i>
        <gpzx-dropdown-menu slot="dropdown">
          <gpzx-dropdown-item>查看</gpzx-dropdown-item>
          <gpzx-dropdown-item>新增</gpzx-dropdown-item>
          <gpzx-dropdown-item>删除</gpzx-dropdown-item>
        </gpzx-dropdown-menu>
      </gpzx-dropdown>
      <span>王小虎</span>
    </gpzx-header>
    
    <gpzx-main>
      <gpzx-table :data="tableData">
        <gpzx-table-column prop="date" label="日期" width="140">
        </gpzx-table-column>
        <gpzx-table-column prop="name" label="姓名" width="120">
        </gpzx-table-column>
        <gpzx-table-column prop="address" label="地址">
        </gpzx-table-column>
      </gpzx-table>
    </gpzx-main>
  </gpzx-container>
</gpzx-container>

<style>
  .gpzx-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .gpzx-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
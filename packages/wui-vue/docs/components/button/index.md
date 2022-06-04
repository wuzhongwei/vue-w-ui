# Button 按钮

常用的操作按钮。

### 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
:::demo

```vue
<template>
  <div class="demo-spacing">
    <w-button>Default</w-button>
    <w-button type="primary">Primary</w-button>
    <w-button type="success">Success</w-button>
    <w-button type="info">Info</w-button>
    <w-button type="warning">Warning</w-button>
    <w-button type="danger">Danger</w-button>
    <w-button>中文</w-button>
  </div>
  <div class="demo-spacing">
    <w-button plain>plain</w-button>
    <w-button type="primary" plain>Primary</w-button>
    <w-button type="success" plain>Success</w-button>
    <w-button type="info" plain>Info</w-button>
    <w-button type="warning" plain>Warning</w-button>
    <w-button type="danger" plain>Danger</w-button>
  </div>
  <div class="demo-spacing">
    <w-button round>round</w-button>
    <w-button type="primary" round>Primary</w-button>
    <w-button type="success" round>Success</w-button>
    <w-button type="info" round>Info</w-button>
    <w-button type="warning" round>Warning</w-button>
    <w-button type="danger" round>Danger</w-button>
  </div>
  <div class="demo-spacing">
      <w-button :icon="Search" circle />
      11
  </div>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
// import './ddd.jsx'
const title = ref('vitepress-theme-demoblock')

const instance = getCurrentInstance()

const onClick = () => {
  instance.appContext.config.globalProperties.$message.success('消息')
}
</script>

```

:::

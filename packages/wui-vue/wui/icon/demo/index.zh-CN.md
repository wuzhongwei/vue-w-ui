---
map:
  # 映射到docs的路径
  path: /components/icon
---

# Icon

这是一个简单的Icon。

## 代码演示

### 基本用法
<demo src="./demo.vue"
  language="vue"
  title="基本用法"
  desc="点击切换。">
</demo>

### 直接使用 SVG 图标
<demo src="./demo1.vue"
  language="vue"
  title="基本用法"
  desc="点击切换。">
</demo>

## Icon 属性

| 属性 | 说明                | 类型                           | 可选值 | 默认值                |
| --------- | -------------------------- | ------------------------------ | ---------------- | ---------------------- |
| color     | svg 的 fill 颜色   | Pick\<CSSProperties, 'color'\> | -                | inherit     |
| size      | SVG 图标的大小，size x size	 | number | string               | -                | inherit from font size |

## Icon 插槽

| Name | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |
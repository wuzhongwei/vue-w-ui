---
map:
  # 映射到docs的路径
  path: /components/button
---

# Button

这是一个简单的按钮。

## 代码演示

### 基本用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
<demo src="./demo.vue"
  language="vue"
  title=""
  desc="">
</demo>

### 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
<demo src="./disabled.vue"
  language="vue"
  title=""
  desc="">
</demo>

### 链接按钮
<demo src="./button-link.vue"
  language="vue"
  title=""
  desc="">
</demo>

### 文字按钮
<demo src="./Text.vue"
  language="vue"
  title=""
  desc="">
</demo>

### 图标按钮
<demo src="./button-icon.vue"
  language="vue"
  title=""
  desc="">
</demo>

### 按钮组
<demo src="./group.vue"
  language="vue"
  title=""
  desc="">
</demo>

### 加载状态按钮
<demo src="./loading.vue"
  language="vue"
  title=""
  desc="">
</demo>

## API

```ts
import { Button } from 'wzw';
```

## Props

| 参数  | 说明 |   类型 |         值 |
| ----- | ---: | -----: | ---------: |
| size  | 大小 | string | 例如'16px' |
| color | 颜色 | string |  例如'red' |

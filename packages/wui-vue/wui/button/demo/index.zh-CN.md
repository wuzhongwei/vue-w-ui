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

### 调整尺寸
<demo src="./Size.vue"
  language="vue"
  title=""
  desc="">
</demo>

## Button 属性

| 属性                           | 说明                                                     | 类型               | 可选值                                              | 默认值 |
| ----------------------------------- | --------------------------------------------------------------- | ------------------ | ------------------------------------------------------------- | ------- |
| size                                | 尺寸         | string             | large / default /small                                        | —       |
| type                                | 类型                                                     | string             | primary / success / warning / danger / info  | —       |
| plain                               | 是否为朴素按钮                           | boolean            | —                                                             | false   |
| text | 是否为文字按钮                            | boolean            | —                                                             | false   |
| bg  | 是否显示文字按钮背景颜色 | boolean            | —                                                             | false   |
| link  | 是否为链接按钮                            | boolean            | —                                                             | false   |
| round                               | 是否为圆角按钮                           | boolean            | —                                                             | false   |
| circle                              | 是否为圆形按钮                          | boolean            | —                                                             | false   |
| loading                             | 是否为加载中状态                                  | boolean            | —                                                             | false   |
| loading-icon                        | 自定义加载中状态图标组件                                | string / Component | —                                                             | Loading |
| disabled                            | 按钮是否为禁用状态                                              | boolean            | —                                                             | false   |
| icon                                | 图标组件                                                  | string / Component | —                                                             | —       |
| autofocus                           | 原生 autofocus 属性                             | boolean            | —                                                             | false   |
| native-type                         | 原生 type 属性                                  | string             | button / submit / reset                                       | button  |

## Button 插槽

| 插槽名    | 说明                |
| ------- | --------------------------- |
| —       | 自定义默认内容   |
| loading | 自定义加载中组件 |
| icon    | 自定义图标组件    |

## Button-Group 属性

| 属性 | 说明                                      | 类型   | 可选值       | 默认值 |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | 用于控制该按钮组内按钮的大小 | string | 与按钮的大小相同 | —       |
| type      | 用于控制该按钮组内按钮的类型 | string | 与按钮的类型一致 | —       |

## Button-Group 插槽

| 插槽名 | 说明                    | 子标签 |
| ---- | ------------------------------ | ------- |
| -    | 自定义按钮组内容 | Button  |

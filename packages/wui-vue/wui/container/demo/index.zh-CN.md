---
map:
  # 映射到docs的路径
  path: /components/container
---

# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：
```html
<w-container>：外层容器。 当子元素中包含 <w-header> 或 <w-footer> 时，全部子元素会垂直上下排列， 否则会水平左右排列。

<w-header>：顶栏容器。

<w-aside>：侧边栏容器。

<w-main>：主要区域容器。

<w-footer>：底栏容器。
```

### 常见页面布局
<demo src="./demo1.vue"
  language="vue"
  title=""
  desc="">
</demo>

<demo src="./demo2.vue"
  language="vue"
  title=""
  desc="">
</demo>

<demo src="./demo3.vue"
  language="vue"
  title=""
  desc="">
</demo>

<demo src="./demo4.vue"
  language="vue"
  title=""
  desc="">
</demo>

<demo src="./demo5.vue"
  language="vue"
  title=""
  desc="">
</demo>

<demo src="./demo6.vue"
  language="vue"
  title=""
  desc="">
</demo>

<demo src="./demo7.vue"
  language="vue"
  title=""
  desc="">
</demo>

## Container 属性

| 属性 | 说明                         | 类型   | 可选值       | 默认值                                                                    |
| --------- | ----------------------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 w-header 或 w-footer 时为 vertical，否则为 horizontal |

## Container 插槽

| 插槽名 | 说明               | 子标签                                    |
| ---- | ------------------------- | ------------------------------------------ |
| —    | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header 属性

| 属性 | 说明          | 类型   | 可选值 | 默认值 |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | 顶栏高度 | string | —               | 60px    |

## Header 插槽

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

## Aside 属性

| 属性 | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------------- | ------ | --------------- | ------- |
| width     | 侧边栏宽度 | string | —               | 300px   |

## Aside 插槽

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

## Main 插槽

| 插槽名 | 	说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

## Footer 属性

| 属性 | 说明          | 类型   | 可选值 | 默认值 |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | 底栏高度 | string | —               | 60px    |

## Footer Slots

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

import { upperFirst } from "../share/utis"
export default function createDocDemo(name: string) {
  const propsTypeName = upperFirst(name)
  const propsName = name + 'Props'
  return `\
<template>
  <div>
  ${name}
  </div>
</template>
<script lang="ts" setup>

</script>

`
}

<template>
  <w-row>
    <w-col><div class="grid-content ep-bg-purple-dark" /></w-col>
  </w-row>
  <w-row>
    <w-col :span="12"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="12"><div class="grid-content ep-bg-purple-light" /></w-col>
  </w-row>
  <w-row>
    <w-col :span="8"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="8"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="8"><div class="grid-content ep-bg-purple" /></w-col>
  </w-row>
  <w-row>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
  </w-row>
  <w-row>
    <w-col :span="4"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="4"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="4"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="4"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="4"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="4"><div class="grid-content ep-bg-purple-light" /></w-col>
  </w-row>
</template>

<style lang="scss">
.w-row {
  margin-bottom: 20px;
}
.w-row:last-child {
  margin-bottom: 0;
}
.w-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<template>
  <w-row :gutter="20">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></w-col>
  </w-row>
  <w-row :gutter="20">
    <w-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></w-col>
    <w-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></w-col>
  </w-row>
  <w-row :gutter="20">
    <w-col :span="12" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></w-col>
  </w-row>
</template>

<style>
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

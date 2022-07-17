<template>
  <w-row class="row-bg">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
  </w-row>
  <w-row class="row-bg" justify="center">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
  </w-row>
  <w-row class="row-bg" justify="end">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
  </w-row>
  <w-row class="row-bg" justify="space-between">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
  </w-row>
  <w-row class="row-bg" justify="space-around">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
  </w-row>
  <w-row class="row-bg" justify="space-evenly">
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple-light" /></w-col>
    <w-col :span="6"><div class="grid-content ep-bg-purple" /></w-col>
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

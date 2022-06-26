<template>
  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
    <w-icon :size="20">
      <Edit />
    </w-icon>
    <w-icon color="#409EFC" class="no-inherit">
      <Share />
    </w-icon>
    <w-icon>
      <Delete />
    </w-icon>
    <w-icon class="is-loading">
      <Loading />
    </w-icon>
    <w-button type="primary">
      <w-icon style="vertical-align: middle">
        <Search />
      </w-icon>
      <span style="vertical-align: middle"> 搜索 </span>
    </w-button>
  </div>
</template>
<script lang="ts" setup>
import {
  Edit,
  Share,
  Delete,
  Loading,
  Search
} from '@element-plus/icons-vue'

</script>
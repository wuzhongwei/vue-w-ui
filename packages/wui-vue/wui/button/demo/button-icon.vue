<template>
  <div class="flex">
    <w-button type="primary" :icon="Edit" />
    <w-button type="primary" :icon="Share" />
    <w-button type="primary" :icon="Delete" />
    <w-button type="primary" :icon="Search">Search</w-button>
    <w-button type="primary">
      Upload<w-icon class="w-icon--right"><Upload /></w-icon>
    </w-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
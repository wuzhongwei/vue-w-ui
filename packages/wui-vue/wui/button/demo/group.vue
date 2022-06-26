<template>
  <w-button-group>
    <w-button type="primary" :icon="ArrowLeft">Previous Page</w-button>
    <w-button type="primary">
      Next Page<w-icon class="w-icon--right"><ArrowRight /></w-icon>
    </w-button>
  </w-button-group>

  <w-button-group class="ml-4" style="margin-left: 1rem">
    <w-button type="primary" :icon="Edit" />
    <w-button type="primary" :icon="Share" />
    <w-button type="primary" :icon="Delete" />
  </w-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
</script>
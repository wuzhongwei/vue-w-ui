<template>
  <div class="demo-spacing">
    <w-button size="large">Large</w-button>
    <w-button>Default</w-button>
    <w-button size="small">Small</w-button>
    <w-button size="large" :icon="Search">Search</w-button>
    <w-button :icon="Search">Search</w-button>
    <w-button size="small" :icon="Search">Search</w-button>
  </div>
  <div class="demo-spacing">
    <w-button size="large" round>Large</w-button>
    <w-button round>Default</w-button>
    <w-button size="small" round>Small</w-button>
    <w-button size="large" :icon="Search" round>Search</w-button>
    <w-button :icon="Search" round>Search</w-button>
    <w-button size="small" :icon="Search" round>Search</w-button>
  </div>
  <div class="demo-spacing">
    <w-button :icon="Search" size="large" circle />
    <w-button :icon="Search" circle />
    <w-button :icon="Search" size="small" circle />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

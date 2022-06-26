<template>
  <div class="demo-spacing">
    <w-button nativeType="reset" type="submit">Default</w-button>
    <w-button type="primary">Primary</w-button>
    <w-button type="success">Success</w-button>
    <w-button type="info">Info</w-button>
    <w-button type="warning">Warning</w-button>
    <w-button type="danger">Danger</w-button>
    <w-button>中文</w-button>
  </div>
  <div class="demo-spacing">
    <w-button plain>plain</w-button>
    <w-button type="primary" plain>Primary</w-button>
    <w-button type="success" plain>Success</w-button>
    <w-button type="info" plain>Info</w-button>
    <w-button type="warning" plain>Warning</w-button>
    <w-button type="danger" plain>Danger</w-button>
  </div>
  <div class="demo-spacing">
    <w-button round>round</w-button>
    <w-button type="primary" round>Primary</w-button>
    <w-button type="success" round>Success</w-button>
    <w-button type="info" round>Info</w-button>
    <w-button type="warning" round>Warning</w-button>
    <w-button type="danger" round>Danger</w-button>
  </div>
  <div class="demo-spacing">
    <w-button :icon="Search" circle />
    <w-button type="primary" :icon="Edit" circle />
    <w-button type="success" :icon="Check" circle />
    <w-button type="info" :icon="Message" circle />
    <w-button type="warning" :icon="Star" circle />
    <w-button type="danger" :icon="Delete" circle />
  </div>
</template>
<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

</script>
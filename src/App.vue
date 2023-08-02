<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <h1 class="scssTry">我是scss自动导入</h1>
  <RouterView />
</template>

<style scoped lang="scss">
  .scssTry{
    color: $priceColor;
  }

</style>

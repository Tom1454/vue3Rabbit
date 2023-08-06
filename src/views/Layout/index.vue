<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

import {useCategoryStore} from '@/stores/category'
import { onMounted } from "vue";

const categoryStore =useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})
</script>

<template>
  <!--为什么加上div嵌套后样式正常，没加上时宽度超过1024变成两列-->

<div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
  </div>
</template>
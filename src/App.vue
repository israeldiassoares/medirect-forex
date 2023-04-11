<script setup lang="ts">
import { RouterView } from 'vue-router'
import { defineAsyncComponent } from "vue"
const Header = defineAsyncComponent({
  loader: () => import('@/components/organisms/OrganismHeader.vue'),

})
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

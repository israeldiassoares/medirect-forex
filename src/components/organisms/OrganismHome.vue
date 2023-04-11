<template>
    <div>
        <DropDownSelect />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"
const DropDownSelect = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomDropDown.vue')
})
</script>

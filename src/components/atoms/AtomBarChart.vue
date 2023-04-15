<template>
    <section style="width: 600px">
        <canvas id="bar-chart">
        </canvas>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { createClosePriceChart } from "@/HistoricalClosePrices"
onMounted(() => {
    createClosePriceChart()
})
</script>

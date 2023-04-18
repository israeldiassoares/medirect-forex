<template>
    <section style="width: 300px; height: 300px;">
        <canvas id="bar-chart">
        </canvas>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { Chart, type BubbleDataPoint, type ChartConfiguration, type ChartConfigurationCustomTypesPerDataset, type ChartItem, type ChartTypeRegistry, type Point } from 'chart.js/auto'
import { useHistoricalClosePrices } from '@/stores/historicalClosePrices'
import { useUserActions } from '@/stores/userActions'
const store = useHistoricalClosePrices()
const userActionsStore = useUserActions()
// import { createClosePriceChart } from "@/utils/ChartsBuilder/HistoricalClosePrices.js"
// const closePriceChart = createClosePriceChart()

let quotesData = store.getHistoricalQuotes
onMounted(() => {
    // createClosePriceChart()
    const context: ChartItem = document.getElementById('bar-chart') as HTMLCanvasElement
    const config: ChartConfiguration = {
        type: 'bar',
        data: {
            labels: store.getHistoricalDate,
            datasets: [
                {
                    barPercentage: 0.5,
                    barThickness: 16,
                    maxBarThickness: 100,
                    minBarLength: 100,
                    label: `Historical close prices ${store.getCurrencyPair}`,
                    data: quotesData,
                    borderWidth: 1
                }
            ]
        },
        options: {
            locale: 'en-EU',
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        format: {
                            style: 'currency',
                            currency: userActionsStore.getSelectedQuoteCurrency
                        }
                    },
                },
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
    let barchart = new Chart(
        context,
        config
    )
    barchart
})
</script>

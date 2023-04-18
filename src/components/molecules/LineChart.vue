<template>
    <div style="width: 300px; height: 200px;">
        <section
            class="flex items-center w-full justify-evenly"
            v-if="userActionsStore.getCurrencyPair"
        >
            <section class="flags">
                <div
                    class="currency-flag rounded-full"
                    :class="`currency-flag-${userActionsStore.getSelectedBaseCurrency.toLocaleLowerCase()}`"
                >
                </div>
                <div
                    class="currency-flag rounded-full"
                    :class="`currency-flag-${userActionsStore.getSelectedQuoteCurrency.toLocaleLowerCase()}`"
                >
                </div>
            </section>
            <section class="exchange">
                <div class="symbol">
                    <p class="font-bold">{{ userActionsStore.getSelectedBaseCurrency }}/{{ userActionsStore.getSelectedQuoteCurrency }}</p>
                </div>
                <div class="quote-currency ">
                    <p class="font-bold">Current price</p>
                    <p class="font-bold">{{ liveCurrencyStore.getLiveCurrency?.mid }}</p>
                </div>
            </section>
        </section>
        <canvas
            id="lineChart"
            ref="canvasId"
        ></canvas>
        <section>
            <hr>
            <section class="flex justify-evenly">
                <button
                    @click="getLast15Minutes()"
                    id="15-m"
                    class="btn w-9 rounded focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                >15M</button>
                <button
                    @click="getLast1Hour()"
                    id="1-hour"
                    class="btn w-9 rounded focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                >1H</button>
                <button
                    @click="getLast1Day()"
                    id="1-day"
                    class="btn w-9 rounded focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                >1D</button>
                <button
                    @click="getLast1Week()"
                    id="1-week"
                    class="btn w-9 rounded focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                >1W</button>
                <button
                    @click="getLast1Month()"
                    id="1-month"
                    class="btn w-9 rounded focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                >1M</button>
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Chart, type ChartItem } from 'chart.js/auto'
import { useTickHistorical } from '@/stores/tickHistorical'
import { useUserActions } from '@/stores/userActions'
//get currentExchange mid price store
import { useLiveCurrency } from '@/stores/liveCurrency'


import { onMounted, onUpdated, ref } from 'vue'

const tickHistoricalStore = useTickHistorical()
const userActionsStore = useUserActions()
const liveCurrencyStore = useLiveCurrency()

let historicalQuotes = ref()
let historicalDate = ref()
const canvasId = ref()

onMounted(() => {
    function getData() {
        historicalQuotes.value = tickHistoricalStore.getHistoricalQuotes
        historicalDate.value = tickHistoricalStore.getHistoricalDate
        const context = canvasId.value.id as ChartItem
        debugger
        const lineChart = new Chart(
            context,
            {
                type: 'line',
                data: {
                    labels: tickHistoricalStore.getHistoricalDate,
                    datasets: [
                        {
                            data: historicalQuotes.value
                        }
                    ]
                },
                options: {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    fill: true,
                    hoverBackgroundColor: 'green',
                    drawActiveElementsOnTop: true,
                    scales: {
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
        )
        lineChart

    }
})
onUpdated(() => {
    liveCurrencyStore.fetchListCurrency()
})
//Functions to get new Data inside chart
function getLast15Minutes() {
    tickHistoricalStore.fetch15Minutes()
}
function getLast1Hour() {
    tickHistoricalStore.fetch1Hour()
}
function getLast1Day() {
    tickHistoricalStore.fetch1Day()
}
function getLast1Week() {
    tickHistoricalStore.fetch1Week()
}
function getLast1Month() {
    tickHistoricalStore.fetch1Month()
}
</script>

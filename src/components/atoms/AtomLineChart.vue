<template>
    <section
        id="line-chart"
        class="flex flex-col items-center"
    >
        <div
            style="width: 600px;"
            class="flex flex-col items-center"
        >
            <section class="flex items-center w-full justify-evenly">
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
                        <p class="font-bold">{{ store.getLiveCurrency?.mid }}</p>
                    </div>
                </section>
            </section>
            <canvas id="forex-chart"></canvas>

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
    </section>
</template>

<script setup lang="ts">
// import { ExchangePrice } from '@/utils/ChartsBuilder/ExchangePrice.js'
import { onMounted } from 'vue'
import { Chart, type ChartConfiguration, type ChartItem, type ChartTypeRegistry } from 'chart.js/auto'
import { useLiveCurrency } from '@/stores/liveCurrency'
import { useTickHistorical } from "@/stores/tickHistorical"
import { useUserActions } from '@/stores/userActions'
const store = useLiveCurrency()
const tickHistoricalStore = useTickHistorical()
const userActionsStore = useUserActions()

//ChartLine
const liveCurrencyStore = store
const tickHistorical = tickHistoricalStore
const dados = tickHistorical

const props = defineProps([ 'dataToPlot', 'context' ])
const context = document.getElementById(props.context) as HTMLCanvasElement

const config: ChartConfiguration = {
    type: 'line',
    data: {
        labels: [ dados.getHistoricalDate ],
        datasets: [
            {
                label: `${liveCurrencyStore.getCurrencyPair}`,
                data: dados.getCurrencyPair//dados.getHistoricalQuotes
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
function createChart(ctx: ChartItem, config: ChartConfiguration<keyof ChartTypeRegistry, (number | [ number, number ] | Point | BubbleDataPoint | null)[], unknown> | ChartConfigurationCustomTypesPerDataset<keyof ChartTypeRegistry, (number | [ number, number ] | Point | BubbleDataPoint | null)[], unknown>) {
    //interpolation to create chart
    return new Chart(
        ctx,
        config
    )
}
onMounted(() => {
    createChart(context, config)
})

</script>

<template>
    <div class="grid grid-colums-3 justify-center">
        <section class="socket w-15 w-16">
            <!-- TODO NEED TO GET CURRENCY DINAMIcally -->
            <WebSocketConnection />
        </section>
        <section id="compare-exchange">
            <DropDownSelect @change="userActionsStore.setSelectedBaseCurrency($event.target.value)">
                <template v-slot:flag>
                    <div
                        class="ml-4 currency-flag"
                        :class="`currency-flag-${userActionsStore.getSelectedBaseCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                </template>

            </DropDownSelect>
            <!-- TODO Pass fetchLiveCurrency call to computed when both Base|Quote is fill -->
            <DropDownSelect @change="userActionsStore.setSelectedQuoteCurrency($event.target.value)">
                <template v-slot:flag>

                    <div
                        class="ml-4 currency-flag"
                        :class="`currency-flag-${userActionsStore.getSelectedQuoteCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                </template>
            </DropDownSelect>

            getCurrencyPair{{ userActionsStore.getCurrencyPair }}
        </section>
        <section id="charts">
            <!-- NEED better undestanding to mount chart on the right time -->
            <LineChart canvasId="lineChart" />
            <!-- <AtomBarChart /> -->
        </section>

    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeUpdate, onMounted } from 'vue'

import { useUserActions } from '@/stores/userActions'
import { useLiveCurrency } from "@/stores/liveCurrency"
import { useTickHistorical } from "@/stores/tickHistorical"
import LineChart from "@/components/molecules/LineChart.vue"
import AtomBarChart from "@/components/atoms/AtomBarChart.vue"

//Import Store User Choices
const userActionsStore = useUserActions()
//Import Store To get ListOfCurrencies
const liveCurrencyStore = useLiveCurrency()
//Import Store to get TickHistorical
const tickHistoricalStore = useTickHistorical()
//Import Components
const DropDownSelect = defineAsyncComponent({
    loader: () => import("@/components/atoms/AtomDropDown.vue")
})
//Chart Components
// const LineChart = defineAsyncComponent({
//     loader: () => import("@/components/molecules/LineChart.vue.js")
// })
const WebSocketConnection = defineAsyncComponent({
    loader: () => import("@/components/molecules/MoleculeWebSocket.vue")
})

//OnMounted First Call to Get List of Available Currency and populate Input
onMounted(() => {
    liveCurrencyStore.fetchListCurrency(true)
    fetchTick()

})
//After choosed, call getCurrencyPair if
async function fetchTick() {
    if (userActionsStore.getCurrencyPair && tickHistoricalStore.getIsLoading) {
        //Call to get 15minutes to lineChart and 30DaysAgo to barHistorialChart
        console.log('dentro do fetchTick true')
        return await tickHistoricalStore.fetch15Minutes(true)
    }
} fetchTick()
//When occour Update will FecthTick()
onBeforeUpdate(() => {
    fetchTick()
    console.log('update', tickHistoricalStore.getHistoricalQuotes)
    //Check if isLoading is false and loading ChartComponent
})

</script>

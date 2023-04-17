<template>
    <div
        class="grid grid-rows-2"
        v-if="true"
    >

        <section id="available-exchange">
            <DropDownSelect />
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
            <DropDownSelect @change="[ userActionsStore.setSelectedQuoteCurrency($event.target.value), store.fetchLiveCurrency() ]">
                <template v-slot:flag>

                    <div
                        class="ml-4 currency-flag"
                        :class="`currency-flag-${userActionsStore.getSelectedQuoteCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                </template>
            </DropDownSelect>
        </section>
        <section
            id="chart"
            v-if="plotCharts"
            class="flex items-center justify-center"
        >
            <section id="live-exchange">
                <AtomLineChart />
            </section>
            <section id="close-prices">
                <AtomBarChart />
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, onUpdated } from "vue"
import { useLiveCurrency } from '@/stores/liveCurrency'
import { useUserActions } from '@/stores/userActions'
import { useHistoricalClosePrices } from "@/stores/historicalClosePrices"
import { useTickHistorical } from "@/stores/tickHistorical"

const store = useLiveCurrency()
const userActionsStore = useUserActions()
const tickHistorical = useTickHistorical()

const historicalPrices = useHistoricalClosePrices()
const DropDownSelect = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomDropDown.vue')
})
const AtomLineChart = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomLineChart.vue')
})
const AtomBarChart = defineAsyncComponent({
    loader: () => import("@/components/atoms/AtomBarChart.vue")
})

const plotCharts = computed(() => {
    return (userActionsStore.getSelectedBaseCurrency.trim().length > 0 &&
        userActionsStore.getSelectedQuoteCurrency.trim().length > 0) ? true : false

})
const canFetch = async function canfetchLast30Days() {
    return plotCharts.value ? [ await historicalPrices.fetchLast30Days(), tickHistorical.fetch15Minutes() ] : ''
}
onUpdated(() => {
    canFetch()
})
store.fetchListCurrency(true)



</script>

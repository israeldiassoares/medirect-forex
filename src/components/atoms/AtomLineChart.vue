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
                        <p class="font-bold">{{ store.getLiveCurrency[ 0 ].mid }}</p>
                    </div>
                </section>
            </section>
            <canvas id="forex-chart"></canvas>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ExchangePrice, UpdateChartExchangePrice } from '@/ExchangePrice'
import { onMounted, onUpdated } from 'vue'
import { useLiveCurrency } from '@/stores/liveCurrency'
import { useUserActions } from '@/stores/userActions'
const store = useLiveCurrency()
const userActionsStore = useUserActions()

onMounted(() => {
    ExchangePrice()
})
onUpdated(() => {
    UpdateChartExchangePrice()
})
</script>

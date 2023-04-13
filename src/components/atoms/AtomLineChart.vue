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
                        :class="`currency-flag-${store.getSelectedBaseCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                    <div
                        class="currency-flag rounded-full"
                        :class="`currency-flag-${store.getSelectedQuoteCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                </section>
                <section class="exchange">
                    <div class="symbol">
                        <p class="font-bold">{{ store.getSelectedBaseCurrency }}/{{ store.getSelectedQuoteCurrency }}</p>
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
import { ExchangePrice } from '@/ExchangePrice'
import { onMounted } from 'vue'
import { useLiveCurrency } from '@/stores/liveCurrency'
const store = useLiveCurrency()


onMounted(() => {
    ExchangePrice()
})
</script>

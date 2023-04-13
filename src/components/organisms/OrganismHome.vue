<template>
    <div class="grid grid-rows-2 ">

        <section id="available-exchange">
            <DropDownSelect />
        </section>
        <section id="compare-exchange">
            <DropDownSelect @change="store.setSelectedBaseCurrency($event.target.value)">
                <template v-slot:flag>
                    <div
                        class="ml-4 currency-flag"
                        :class="`currency-flag-${store.getSelectedBaseCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                </template>

            </DropDownSelect>
            <DropDownSelect @change="[ store.setSelectedQuoteCurrency($event.target.value), store.fetchLiveCurrency() ]">
                <template v-slot:flag>

                    <div
                        class="ml-4 currency-flag"
                        :class="`currency-flag-${store.getSelectedQuoteCurrency.toLocaleLowerCase()}`"
                    >
                    </div>
                </template>
            </DropDownSelect>
        </section>
        <section id="chart">
            <AtomLineChart />
        </section>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue"
import { useLiveCurrency } from '@/stores/liveCurrency'
const store = useLiveCurrency()
const DropDownSelect = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomDropDown.vue')
})
const AtomLineChart = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomLineChart.vue')
})

onMounted(() => {
    store.fetchListCurrency()
})

</script>

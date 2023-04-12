<template>
    <div class="grid grid-rows-2 ">
        <section id="available-exchange">
            <DropDownSelect />
        </section>
        <section id="compare-exchange">
            <DropDownSelect @change="store.setSelectedBaseCurrency($event.target.value)" />
            <DropDownSelect @change="[ store.setSelectedComparedCurrency($event.target.value), fetchLiveCurrency() ]" />
            <!-- <AtomLineChart /> -->
        </section>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue"
import { useLiveCurrency } from '@/stores/liveCurrency'
const DropDownSelect = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomDropDown.vue')
})
// const AtomLineChart = defineAsyncComponent({
//     loader: () => import('@/components/atoms/AtomLineChart.vue')
// })
const store = useLiveCurrency()
onMounted(() => {
    store.fetchListCurrency()
})
function fetchLiveCurrency() {
    store.fetchLiveCurrency()
}


</script>

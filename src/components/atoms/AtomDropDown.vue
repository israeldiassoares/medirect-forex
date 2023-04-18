<template>
    <div>
        <select v-model="currencySelected">
            <option
                disabled
                value=""
            >Please select one</option>
            <option
                v-for="(       currency, index          ) in getCurrencyList()"
                :key="index"
                :id="index"
            >
                {{ index }}
            </option>
        </select>
        <slot name="flag"></slot>
    </div>
</template>

<script setup lang="ts">
import { useLiveCurrency } from '@/stores/liveCurrency'
import { onMounted, ref } from 'vue'
const store = useLiveCurrency()
function getCurrencyList() {
    return store.getStateCurrencyList
}
const currencySelected = ref('')
onMounted(() => {
    getCurrencyList()
})
</script>
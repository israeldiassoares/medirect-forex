<template>
    <div>
        <Title title-text="Forex Exchange" class="text-3xl font-bold"/>
        <SubTitle subtitle-text="Check out the current price for a currency pair" />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"
const Title = defineAsyncComponent({
    loader: () => import('@/components/molecules/MoleculeTitle.vue'),

    // A component to use while the async component is loading
    // loadingComponent: LoadingComponent,
    // Delay before showing the loading component. Default: 200ms.
    // delay: 200,

    // A component to use if the load fails
    // errorComponent: ErrorComponent,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    // timeout: 3000

})
const SubTitle = defineAsyncComponent({
    loader: () => import('@/components/molecules/MoleculeSubTitle.vue')
})

</script>

import { defineStore } from 'pinia'

const token = 'live_currencies_list?api_key=WUDjYatxGAYWpomaK1p1'
export const useLiveCurrency = defineStore('liveCurrency', {
    state: () => ({
        liveCurrencyList: {} as LiveCurrency,
        selectedCurrency: [] as string[]
    }),
    actions: {
        async getListCurrency() {
            try {
                this.liveCurrencyList = await fetch(`/api/${token}`)
                    .then(response => response.json())
            } catch (error) {
                console.log('errrou', error)
            }
        },
        setSelectedCurrency(symbol: string) {
            this.selectedCurrency.push(symbol)
        }
    },
    getters: {
        getStateCurrencyList(state) {
            return state.liveCurrencyList.available_currencies
        },
        getSelectedCurrency(state) {
            return state.selectedCurrency
        }
    }
})
export interface LiveCurrency {
    available_currencies: {},
    endpoint: string
}
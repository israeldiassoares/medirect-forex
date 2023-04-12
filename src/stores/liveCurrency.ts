import { defineStore } from 'pinia'

const api_key = 'WUDjYatxGAYWpomaK1p1'
const liveCurrenciesList = 'live_currencies_list?api_key'
const liveCurrency = 'live?currency'
export const useLiveCurrency = defineStore('liveCurrency', {
    state: () => ({
        liveCurrencyList: {} as LiveCurrencyList,
        selectedBaseCurrency: '' as string,
        selectedQuoteCurrency: '' as string,
        liveCurrency: {} as LiveCurrency
    }),
    actions: {
        async fetchListCurrency() {
            try {
                this.liveCurrencyList = await fetch(`/api/${liveCurrenciesList}=${api_key}`)
                    .then(response => response.json())
            } catch (error) {
                console.log('errrou', error)
            }
        },
        setSelectedBaseCurrency(symbol: string) {
            this.selectedBaseCurrency = symbol
        },
        setSelectedComparedCurrency(symbol: string) {
            this.selectedQuoteCurrency = symbol
        },
        async fetchLiveCurrency() {
            this.liveCurrency = await fetch(`/api/${liveCurrency}=${this.selectedBaseCurrency}${this.selectedQuoteCurrency}&api_key=${api_key}`).then(response => response.json())
        }
    },
    getters: {
        getStateCurrencyList(state) {
            return state.liveCurrencyList.available_currencies
        },
        getSelectedBaseCurrency(state) {
            return state.selectedBaseCurrency
        },
        getSelectedComparedCurrency(state) {
            return state.selectedQuoteCurrency
        },
        getLiveCurrency(state) {
            return state.liveCurrency.quotes
        }
    }
})
export interface LiveCurrencyList {
    available_currencies: {},
    endpoint: string
}
export interface LiveCurrency {
    "endpoint": string,
    "quotes": [
        {
            "ask": number,
            "base_currency": string,
            "bid": number,
            "mid": number,
            "quote_currency": string
        }
    ],
    "requested_time": string,
    "timestamp": number
}

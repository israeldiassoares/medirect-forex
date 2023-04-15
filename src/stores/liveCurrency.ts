import { defineStore } from 'pinia'
import { useUserActions } from './userActions'
const api_key = 'WUDjYatxGAYWpomaK1p1'
const liveCurrenciesList = 'live_currencies_list?api_key'
const liveCurrency = 'live?currency'
export const useLiveCurrency = defineStore('liveCurrency', {

    state: () => ({
        liveCurrencyList: {} as LiveCurrencyList,
        selectedBaseCurrency: '' as string,
        selectedQuoteCurrency: '' as string,
        currencyPair: '' as string,
        liveCurrency: {} as LiveCurrency
    }),
    actions: {
        async fetchListCurrency(isMock = false) {
            if (isMock) {
                try {
                    this.liveCurrencyList = await fetch(`/src/data/live_currencies.json`).then(response => response.json())
                } catch (error) {
                    console.error(error)
                }
            } else {
                try {
                    this.liveCurrencyList = await fetch(`/api/${liveCurrenciesList}=${api_key}`)
                        .then(response => response.json())
                } catch (error) {
                    console.log('errrou', error)
                }
            }
        },

        async fetchLiveCurrency(isMock = false) {
            if (isMock) {
                this.liveCurrency = await fetch(`/src/data/live.json`).then(response => response.json())
            } else {
                this.liveCurrency = await fetch(`/api/${liveCurrency}=${this.currencyPair}&api_key=${api_key}`).then(response => response.json())
            }
        },
        setCurrencyPair() {
            this.currencyPair = this.userActionsStore.getSelectedBaseCurrency + this.userActionsStore.getSelectedQuoteCurrency
        }
    },
    getters: {
        userActionsStore() {
            const userActionsStore = useUserActions()
            return userActionsStore
        },
        getStateCurrencyList(state) {
            return state.liveCurrencyList.available_currencies
        },
        getLiveCurrency(state) {
            return state.liveCurrency.quotes
        },
        getCurrencyPair(state) {
            return state.currencyPair
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

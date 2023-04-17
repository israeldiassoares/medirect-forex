import { defineStore } from 'pinia'
import { useUserActions } from './userActions'

const API_KEY = import.meta.env.VITE_API_EXCHANGE_KEY

const liveCurrenciesList = 'live_currencies_list'
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
        /*List of currency*/
        async fetchListCurrency(isMock = false) {
            if (isMock) {
                try {
                    this.liveCurrencyList = await fetch(`/src/data/live_currencies.json`).then(response => response.json())
                } catch (error) {
                    console.error(error)
                }
            } else {
                try {
                    this.liveCurrencyList = await fetch(`/api/${liveCurrenciesList}?api_key=${API_KEY}`)
                        .then(response => response.json())
                } catch (error) {
                    console.error('errrou', error)
                }
            }
        },

        async fetchLiveCurrency(isMock = false) {
            if (isMock) {
                this.liveCurrency = await fetch(`/src/data/live.json`).then(response => response.json())
            } else {
                this.liveCurrency = await fetch(`/api/${liveCurrency}=${this.getCurrencyPair}&api_key=${API_KEY}`).then(response => response.json())
            }
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
            if (state?.liveCurrency.quotes != null)

                return state?.liveCurrency.quotes[ state.liveCurrency.quotes.length - 1 ]
        },
        getCurrencyPair() {
            return useUserActions().getCurrencyPair
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

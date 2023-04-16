import { defineStore } from 'pinia'
import { useLiveCurrency } from '@/stores/liveCurrency'

const API_KEY = import.meta.env.APIEXCHANGEKEY
const endpoint = 'tick_historical'
const initialDate = new Date() //YYYY-MM-DD
const endDate = '2023-04-13'

export const useTickHistorical = defineStore('tick-historical', {
    state: () => ({
        tickHistorical: {} as TimeSeriesResponse,
        currencyPair: '' as string
    }),
    actions: {
        async fetchTickHistorical(isMock = false) {
            if (isMock) {
                this.tickHistorical = await fetch(`/src/data/tick_historical_sample.json`).then(response => response.json())
                debugger
                return
            }
            this.tickHistorical = await fetch(`/api/${endpoint}?start_date =${initialDate}&end_date=${endDate}&currency=${curencyPair}&api_key=${API_KEY}`).then(response => response.json())
        },
    },
    getters: {
        getTickHistorical(state) {
            return state.tickHistorical
        },
        getHistoricalQuotes(state) {
            console.log(state.tickHistorical)
            return state.tickHistorical.quotes.map(quotePrice => quotePrice.ask)
        },
        getHistoricalDate(state) {
            return state.tickHistorical.quotes.map(quoteDate => quoteDate.time)
        },
        getCurrencyPair(state) {
            return state.tickHistorical.quotes.find(quoteDate => quoteDate.inst)
        },
        getUserCurrencyPair() {
            const liveCurrency = useLiveCurrency()
            const curencyPair = liveCurrency.getCurrencyPair
            return curencyPair
        }
    }
})

export interface TimeSeriesResponse {
    "end_date": string //"2023-04-12 09:00",
    "endpoint": string, //"tick_historical_sample"
    "instrument": string, //CurrencyPair
    "quotes": Quotes[],
    "start_date": string
}

export interface Quotes {
    "ask": number,
    "bid": number,
    "inst": string,
    "time": string
}

import { defineStore } from 'pinia'
import { calculateDaysAgo, formatDate, getHourMinuteAgo, getHourMinuteNow } from "@/utils/convertDate"
import { useUserActions } from './userActions'

const API_KEY = import.meta.env.VITE_API_EXCHANGE_KEY
const endpoint = 'timeseries'
//TODO validation if is weekend
export const useTickHistorical = defineStore('tick-historical', {
    state: () => ({
        exchangeCurrencyList: {} as TimeSeriesResponse,
        isLoading: true as boolean
    }),
    actions: {
        async fetch15Minutes(isMock = false) {
            const initialDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteAgo()}` //YYYY-MM-DD
            const endDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteNow()}`
            this.isLoading = true
            if (isMock) {
                return [ this.exchangeCurrencyList = await fetch(`/src/data/timeseries_15minutes.json`).then(response => response.json())
                    , this.isLoading = false ]

            } else {
                return [ this.exchangeCurrencyList = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records&interval=minute&period=1`).then(response => response.json()),
                this.isLoading = false ]

            }
        },
        async fetch1Hour() {
            const initialDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteAgo(60)}`
            const endDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteNow()}`
            this.isLoading = true
            this.exchangeCurrencyList = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records&interval=minute&period=5`).then(response => response.json())
            this.isLoading = false
        },
        async fetch1Day() {
            const initialDate = `${calculateDaysAgo(new Date(), 1)}-${getHourMinuteNow()}`
            const endDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteNow()}`
            this.isLoading = true
            this.exchangeCurrencyList = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records&interval=hourly`).then(response => response.json())
            this.isLoading = false

        },
        async fetch1Week() {
            const initialDate = `${calculateDaysAgo(new Date(), 7)}` //YYYY-MM-DD
            const endDate = `${formatDate('yyyy-mm-dd')}`
            this.isLoading = true
            this.exchangeCurrencyList = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records`).then(response => response.json())
            this.isLoading = false

        },
        async fetch1Month() {
            const initialDate = `${calculateDaysAgo(new Date(), 31)}`
            const endDate = `${formatDate('yyyy-mm-dd')}`
            this.isLoading = true
            this.exchangeCurrencyList = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records`).then(response => response.json())
            this.isLoading = false
        },


    },
    getters: {
        getTickHistorical(state) {
            if (state.exchangeCurrencyList.quotes != null && !state.isLoading)
                return state.exchangeCurrencyList.quotes
        },
        getHistoricalQuotes(state) {
            if (state.exchangeCurrencyList.quotes != null && !state.isLoading)
                return state.exchangeCurrencyList.quotes.map(quotePrice => quotePrice.close)

        },
        getHistoricalDate(state) {
            if (state.exchangeCurrencyList.quotes != null && !state.isLoading)
                return state.exchangeCurrencyList.quotes.map(quoteDate => quoteDate.date)
        },
        getCurrencyPair() {
            return useUserActions().getCurrencyPair
        },
        getIsLoading(state) {
            return state.isLoading
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
    "close": number,
    "high": number,
    "low": number,
    "open": number,
    "date": string
}

import { defineStore } from 'pinia'
import { calculateDaysAgo, formatDate, getHourMinuteAgo, getHourMinuteNow } from "@/utils/convertDate"
import { useUserActions } from './userActions'

const API_KEY = import.meta.env.VITE_API_EXCHANGE_KEY
const endpoint = 'timeseries'
//TODO validation if is weekend
export const useTickHistorical = defineStore('tick-historical', {
    state: () => ({
        last15minutes: {} as TimeSeriesResponse,
        hourlyHistorical: {} as TimeSeriesResponse,
        dailyHistorical: {} as TimeSeriesResponse,
        weekHistorical: {} as TimeSeriesResponse,
        monthHistorical: {} as TimeSeriesResponse
    }),
    actions: {
        async fetch15Minutes(isMock = false) {
            const initialDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteAgo()}` //YYYY-MM-DD
            const endDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteNow()}`
            if (isMock) {
                this.tickHistorical = await fetch(`/src/data/tick_historical_sample.json`).then(response => response.json())
                return
            }
            this.last15minutes = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records&interval=minute&period=1`).then(response => response.json())
        },
        async fetch1Hour() {
            const initialDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteAgo(60)}`
            const endDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteNow()}`
            this.hourlyHistorical = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records&interval=minute&period=5`).then(response => response.json())
        },
        async fetch1Day() {
            const initialDate = `${calculateDaysAgo(new Date(), 1)}-${getHourMinuteNow()}`
            const endDate = `${formatDate('yyyy-mm-dd')}-${getHourMinuteNow()}`
            this.dailyHistorical = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records&interval=hourly`).then(response => response.json())
        },
        async fetch1Week() {
            const initialDate = `${calculateDaysAgo(new Date(), 7)}` //YYYY-MM-DD
            const endDate = `${formatDate('yyyy-mm-dd')}`

            this.weekHistorical = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records`).then(response => response.json())
        },
        async fetch1Month() {
            const initialDate = `${calculateDaysAgo(new Date(), 31)}`
            const endDate = `${formatDate('yyyy-mm-dd')}`

            this.monthHistorical = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records`).then(response => response.json())
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
        getCurrencyPair() {
            return useUserActions().getCurrencyPair
        },
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

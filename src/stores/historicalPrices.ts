import { defineStore } from 'pinia'

const API_KEY = import.meta.env.APIEXCHANGEKEY
const endpoint = 'timeseries'
const initialDate = '2023-04-01' //YYYY-MM-DD
const endDate = '2023-04 - 13'
const curencyPair = "EURBRL"
export const useLiveCurrency = defineStore('liveCurrency', {
    state: () => ({
        historicalPriceList: [] as TimeSeries[]
    }),
    actions: {
        async fetchTimeSeries() {
            this.historicalPriceList = await fetch(`/api/${endpoint}?start_date =${initialDate}&end_date=${endDate}&currency=${curencyPair}&api_key=${API_KEY}`).then(response => response.json())
        }
    },
    getters: {

    }
})

export interface TimeSeries {
    "base_currency": string,
    "end_date": string,
    "endpoint": string,
    "quote_currency": string,
    "quotes": Quotes[],
    "request_time": string,
    "start_date": string
}

export interface Quotes {
    "close": number,
    "date": string,
    "high": number,
    "low": number,
    "open": number
}
/** 20230414212807
     https://marketdata.tradermade.com/api/v1/timeseries?start_date=2023-04-01&end_date=2023-04-13&currency=EURBRL&api_key=WUDjYatxGAYWpomaK1p1
 */

import { defineStore } from 'pinia'
import {calculateDaysAgo} from "@/utils/convertDate"
// import { useLiveCurrency } from '@/stores/liveCurrency'
// const liveCurrency = useLiveCurrency()
const API_KEY = import.meta.env.APIEXCHANGEKEY
const endpoint = 'timeseries'
const initialDate = new Date() //YYYY-MM-DD
const endDate = '2023-04-13'
// const curencyPair = liveCurrency.getCurrencyPair

export const useHistoricalClosePrices = defineStore('historical-close-prices', {
    state: () => ({
        historicalPriceList: {} as TimeSeriesResponse,
        currencyPair: '' as string
    }),
    actions: {
        async fetchTimeSeries(mock = false) {
            if (mock) {
                this.historicalPriceList = await fetch(`/src/data/timeseries.json`).then(response => response.json())
                this.setCurrencyPair()
                return
            }
            this.historicalPriceList = await fetch(`/api/${endpoint}?start_date =${initialDate}&end_date=${endDate}&currency=${curencyPair}&api_key=${API_KEY}`).then(response => response.json())
        },
        setCurrencyPair() {
            this.currencyPair = this.historicalPriceList.base_currency + this.historicalPriceList.quote_currency
        }
    },
    getters: {
        getHistoricalQuotes(state) {
            return state.historicalPriceList.quotes.map(quotePrice => quotePrice.close)
        },
        getHistoricalDate(state) {
            return state.historicalPriceList.quotes.map(quoteDate => quoteDate.date)
        },
        getCurrencyPair(state) {
            return state.currencyPair
        }
    }
})

export interface TimeSeriesResponse {
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
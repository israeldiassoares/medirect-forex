/** 20230414212807
     https://marketdata.tradermade.com/api/v1/timeseries?start_date=2023-04-01&end_date=2023-04-13&currency=EURBRL&api_key=WUDjYatxGAYWpomaK1p1
 */

import { defineStore } from 'pinia'
import { calculateDaysAgo, formatDate } from "@/utils/convertDate"
import { useUserActions } from './userActions'

const API_KEY = import.meta.env.VITE_API_EXCHANGE_KEY
const endpoint = 'timeseries'

export const useHistoricalClosePrices = defineStore('historical-close-prices', {
    state: () => ({
        historicalPriceList: {} as TimeSeriesResponse,
    }),
    actions: {
        async fetchLast30Days(isMock = false) {
            const initialDate = calculateDaysAgo(new Date(), 30)
            const endDate = formatDate('yyyy-mm-dd')
            if (isMock) {
                return this.historicalPriceList = await fetch(`/src/data/timeseries.json`).then(response => response.json())
            }
            return this.historicalPriceList = await fetch(`/api/${endpoint}?currency=${this.getCurrencyPair}&api_key=${API_KEY}&start_date=${initialDate}&end_date=${endDate}&format=records`).then(response => response.json())
        }
    },
    getters: {
        getHistoricalQuotes(state) {
            if (state?.historicalPriceList.quotes != null)
                return state.historicalPriceList.quotes.map(quotePrice => quotePrice.close)
        },
        getHistoricalDate(state) {
            if (state?.historicalPriceList.quotes != null)
                return state.historicalPriceList.quotes.map(quoteDate => quoteDate.date)
        },
        getCurrencyPair() {
            return useUserActions().getCurrencyPair
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
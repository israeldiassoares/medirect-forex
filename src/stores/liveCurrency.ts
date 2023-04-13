import { defineStore } from 'pinia'

const api_key = 'WUDjYatxGAYWpomaK1p1'
const liveCurrenciesList = 'live_currencies_list?api_key'
const liveCurrency = 'live?currency'
export const useLiveCurrency = defineStore('liveCurrency', {
    state: () => ({
        liveCurrencyList: {} as LiveCurrencyList,
        selectedBaseCurrency: '' as string,
        selectedQuoteCurrency: '' as string,
        liveCurrency: {} as LiveCurrency,
        liveCurrencyMock: {
            "endpoint": "live",
            "quotes": [
                {
                    "ask": 0.1845672,
                    "base_currency": "BRL",
                    "bid": 0.1845672,
                    "mid": 0.1845672,
                    "quote_currency": "EUR"
                }
            ],
            "requested_time": "Thu, 13 Apr 2023 11:38:40 GMT",
            "timestamp": 1681385921
        },
        liveCurrencyListMock: {
            "available_currencies": {
                "AED": "UAE Dirham",
                "ALL": "Albanian Lek",
                "AOA": "Angolan Kwanza",
                "ARS": "Argentine Peso",
                "AUD": "Australian Dollar",
                "BDT": "Bangladeshi Taka",
                "BGN": "Bulgaria Lev",
                "BHD": "Bahraini Dinar",
                "BRL": "Brazilian Real",
                "CAD": "Canadian Dollar",
                "CHF": "Swiss Franc",
                "CLP": "Chilean Peso",
                "CNH": "Chinese Yuan offshore",
                "CNY": "Chinese Yuan onshore",
                "COP": "Colombian Peso",
                "CZK": "Czech Koruna",
                "DKK": "Danish Krone",
                "EGP": "Egyptian Pound",
                "EUR": "Euro",
                "GBP": "British Pound Sterling",
                "GHS": "Ghanaian Cedi",
                "HKD": "Hong Kong Dollar",
                "HRK": "Croatian Kuna",
                "HUF": "Hungarian Forint",
                "IDR": "Indonesian Rupiah",
                "ILS": "Israeli New Sheqel",
                "INR": "Indian Rupee",
                "ISK": "Icelandic Krona",
                "JOD": "Jordanian Dinar",
                "JPY": "Japanese Yen",
                "KES": "Kenyan Shillings",
                "KRW": "South Korean Won",
                "KWD": "Kuwaiti Dinar",
                "LBP": "Lebanese Pound",
                "LKR": "Sri Lankan Rupee",
                "MAD": "Moroccan Dirham",
                "MUR": "Mauritian Rupee",
                "MXN": "Mexican Peso",
                "MYR": "Malaysian Ringgit",
                "NGN": "Nigerean Naira",
                "NOK": "Norwegian Krone",
                "NZD": "New Zealand Dollar",
                "OMR": "Omani Rial",
                "PEN": "Peruvian Nuevo Sol",
                "PHP": "Philippine Peso",
                "PKR": "Pakistani Rupee",
                "PLN": "Polish Zloty",
                "QAR": "Qatari Rial",
                "RON": "Romanian Leu",
                "RUB": "Russian Ruble",
                "SAR": "Saudi Arabian Riyal",
                "SEK": "Swedish Krona",
                "SGD": "Singapore Dollar",
                "THB": "Thai Baht",
                "TND": "Tunisian Dinar",
                "TRY": "Turkish Lira",
                "TWD": "Taiwanese Dollar",
                "USD": "US Dollar",
                "VND": "Vietnamese Dong",
                "XAF": "Central African Francs",
                "XAG": "Silver (troy ounce)",
                "XAU": "Gold (troy ounce)",
                "XOF": "West African CFA franc",
                "XPD": "Palladium",
                "XPT": "Platinum",
                "ZAR": "South African Rand",
                "ZWL": "Zimbabwean Dollar"
            },
            "endpoint": "live_currencies"
        }
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
            console.log('oq vem', symbol)
            this.selectedBaseCurrency = symbol
        },
        setSelectedQuoteCurrency(symbol: string) {
            this.selectedQuoteCurrency = symbol
        },
        async fetchLiveCurrency() {
            this.liveCurrency = await fetch(`/api/${liveCurrency}=${this.selectedBaseCurrency}${this.selectedQuoteCurrency}&api_key=${api_key}`).then(response => response.json())
        }
    },
    getters: {
        getStateCurrencyList(state) {
            console.log('ose', state.liveCurrencyList.available_currencies)
            return state.liveCurrencyList.available_currencies
        },
        getSelectedBaseCurrency(state) {
            return state.selectedBaseCurrency
        },
        getSelectedQuoteCurrency(state) {
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

import { defineStore } from 'pinia'

export const useUserActions = defineStore('user-actions', {
    state: () => ({
        selectedBaseCurrency: '' as string,
        selectedQuoteCurrency: '' as string,
    }),
    actions: {
        setSelectedBaseCurrency(symbol: string) {
            this.selectedBaseCurrency = symbol
        },
        setSelectedQuoteCurrency(symbol: string) {
            this.selectedQuoteCurrency = symbol
        }
    },
    getters: {
        getSelectedBaseCurrency(state) {
            return state.selectedBaseCurrency
        },
        getSelectedQuoteCurrency(state) {
            return state.selectedQuoteCurrency
        }
    }
})
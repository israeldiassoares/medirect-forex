import { Chart, type ChartConfiguration } from 'chart.js/auto'
import { useHistoricalClosePrices } from "@/stores/historicalClosePrices"
import { useUserActions } from '../../stores/userActions'
export function createClosePriceChart() {
    const store = useHistoricalClosePrices()
    const userActionsStore = useUserActions()
    const context = document.getElementById('bar-chart') as HTMLCanvasElement
    const config: ChartConfiguration = {
        type: 'bar',
        data: {
            labels: store.getHistoricalDate,
            datasets: [
                {
                    barPercentage: 0.5,
                    barThickness: 16,
                    maxBarThickness: 100,
                    minBarLength: 100,
                    label: `Historical close prices ${store.getCurrencyPair}`,
                    data: store.getHistoricalQuotes,
                    borderWidth: 1
                }
            ]
        },
        options: {
            locale: 'en-EU',
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        format: {
                            style: 'currency',
                            currency: userActionsStore.getSelectedQuoteCurrency,
                            currencyDisplay: 'symbol'
                        }
                    },
                },
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }

    //interpolation to create chart
    const chart = new Chart(
        context,
        config
    )

}
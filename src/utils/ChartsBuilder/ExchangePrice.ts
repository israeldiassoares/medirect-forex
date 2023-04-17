import Chart, { type ChartConfiguration } from 'chart.js/auto'
import { useLiveCurrency } from "@/stores/liveCurrency"
import { useTickHistorical } from '../../stores/tickHistorical'

export class ExchangePrice {
    liveCurrencyStore = useLiveCurrency()
    tickHistorical = useTickHistorical()
    data = this?.tickHistorical?.getTickHistorical.quotes
    dados = this.data //this.FlatNumber(this.data)

    context = document.getElementById('forex-chart') as HTMLCanvasElement
    config: ChartConfiguration = {
        type: 'line',
        data: {
            labels: this.dados.map((row: { time: string | number | Date }) => new Date(row.time).getHours() + ':' + new Date(row.time).getMinutes()),
            datasets: [
                {
                    label: `${this.liveCurrencyStore.getCurrencyPair}`,
                    data: this.dados.map(row => row.ask)
                }
            ]
        },
        options: {
            borderColor: 'rgba(0, 0, 0, 0.1)',
            fill: true,
            hoverBackgroundColor: 'green',
            drawActiveElementsOnTop: true,
            scales: {
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
    // private FlatNumber(data: any[], time: number = 3) {
    //     const dados = [] as any[]
    //     dados.push(data[ 0 ])
    //     data.forEach((valor) => {
    //         const minute = valor.time - dados[ dados.length - 1 ].time
    //         if ((new Date(minute)).getMinutes() >= time) {
    //             dados.push(valor)
    //         }
    //     })
    //     return dados
    // }

    createChart() {
        return new Chart(
            this.context,
            this.config
        )
    }

    updateLineChart() {
        return this.createChart().update()
    }
}

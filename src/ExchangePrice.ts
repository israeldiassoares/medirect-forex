import Chart, { type ChartConfiguration } from 'chart.js/auto'
import { useLiveCurrency } from "@/stores/liveCurrency"
import { useTickHistorical } from './stores/tickHistorical'

export function ExchangePrice() {
    const liveCurrencyStore = useLiveCurrency()
    const tickHistorical = useTickHistorical()
    const data = tickHistorical.getTickHistorical.quotes
    const dados = FlatNumber(data)

    function FlatNumber(data: any[], time: number = 3) {
        const dados = [] as any[]
        debugger
        dados.push(data[ 0 ])
        data.forEach((valor) => {
            const minute = valor.time - dados[ dados.length - 1 ].time
            if ((new Date(minute)).getMinutes() >= time) {
                dados.push(valor)
            }
        })
        return dados
    }

    const context = document.getElementById('forex-chart') as HTMLCanvasElement
    const config: ChartConfiguration = {
        type: 'line',
        data: {
            labels: dados.map((row: { time: string | number | Date }) => new Date(row.time).getHours() + ':' + new Date(row.time).getMinutes()),
            datasets: [
                {
                    label: `${liveCurrencyStore.getCurrencyPair}`,
                    data: dados.map(row => row.ask)
                }
            ]
        },
        options: {
            borderColor: 'rgba(0, 0, 0, 0.1)',
            fill: true,
            hoverBackgroundColor: 'green',
            drawActiveElementsOnTop: true,
        }

    }


    const chart = new Chart(
        context,
        config
    )

}

export function UpdateChartExchangePrice() {
    ExchangePrice().update()
}
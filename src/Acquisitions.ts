import Chart from 'chart.js/auto'

export function Acquisitions() {
    (async function () {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ]

        new Chart(
            document.getElementById('acquisitions') as HTMLCanvasElement,
            {
                type: 'line',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count)
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
        )
    })
        ()
}
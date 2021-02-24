import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import 'chartjs-plugin-crosshair'





const Chart = ({ coin }) => {

    const [chartData, setChartData] = useState({})

    const chart = async (days, interval) => {
        let priceArr = []
        let dateArr = []
        let url = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
        await axios.get(url)
            .then(async res => {

                await res.data.prices.forEach((day) => priceArr.push(day[1]))
                await res.data.prices.forEach((day) => {
                    const milliseconds = day[0]
                    const dateObject = new Date(milliseconds)
                    dateArr.push(dateObject.toLocaleString())
                })

            }).then(() => {

                setChartData({
                    labels: dateArr,
                    datasets: [
                        {
                            label: [],
                            pointHitRadius: 20,
                            data: priceArr,
                            backgroundColor: [
                                'rgba(75, 192, 192, 0.6)'
                            ]
                        }]
                })


            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        chart(2, 'hourly')
    }, [])


    return (
        <div>
            <button onClick={() => chart(2, 'hourly')} >Hourly (24h)</button>
            <button onClick={() => chart(30, 'daily')} >Daily (30)</button>
            <button onClick={() => chart(120, 'daily')} >Daily (120)</button>
            <Line
                data={chartData} options={{
                    plugins: {
                        crosshair: {
                            line: {
                                color: '#F66',
                                width: 1
                            },
                            sync: {
                                enabled: true,
                                group: 1,
                                suppressTooltips: false
                            },
                            callbacks: {
                                beforeZoom: function (start, end) {
                                    return true;
                                },
                                afterZoom: function (start, end) {
                                }
                            }
                        }
                    },
                    responsive: true,
                    title: { text: `${coin.id.toUpperCase()}`, display: true },
                    elements: {
                        line: {
                            tension: 0
                        },
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }

                        }]
                    }
                }}
            />
        </div>
    )
}

export default Chart



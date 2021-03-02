import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const SmallChart = ({ coin, price }) => {

    const [chartData, setChartData] = useState({})

    const lineColor = price > 0 ? '#05f4b7' : '#FF6666'

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
                            pointHitRadius: 0,
                            pointHoverRadius: 0,

                            data: priceArr,
                            backgroundColor: ['transparent'],
                            borderColor: `${lineColor}`,
                            borderWidth: 2
                        }]
                })


            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        chart(1, 'minute')
    }, [])


    return (
        <>
            <Line
                data={chartData} options={{
                    plugins: {
                        crosshair: false
                    },
                    tooltips: {
                        enabled: false
                    },
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }],
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    elements: {
                        line: {
                            tension: 0
                        },
                        point: {
                            radius: 0
                        }
                    },

                }}
            />
        </>
    )
}

export default SmallChart



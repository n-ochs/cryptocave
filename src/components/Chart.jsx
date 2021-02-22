import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

const Chart = ({ coin }) => {

    const getDays = (timeframe) => {

        const formattedDates = []
        const lastNthDays = [...new Array(timeframe)].map((i, idx) => moment().startOf("day").subtract(idx, "days").format('L'));
        const splitDate = lastNthDays.map((day) => day.split('/'))
        for (const day of splitDate) {
            formattedDates.push(`${day[1]}-${day[0]}-${day[2]}`)
        }
        return formattedDates
    }

    const [chartData, setChartData] = useState({})

    const chart = () => {


        let priceArr = []
        let dateArr = []
        for (const day of getDays(30)) {
            if (coin.id) {
                axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${day}`)
                    .then(res => {
                        if (res.data.market_data) {
                            priceArr.push(res.data.market_data.current_price.usd)
                            dateArr.push(day)
                            //console.log(dateArr)

                        } else {
                            priceArr = []
                            dateArr = []
                        }

                    }).then(() => {
                        if (priceArr > 0) {
                            setChartData({
                                labels: dateArr,
                                datasets: [
                                    {
                                        label: 'Price',
                                        data: priceArr,
                                        backgroundColor: [
                                            'rgba(75, 192, 192, 0.6)'
                                        ],
                                        borderWidth: 1
                                    }]
                            })
                        }
                    })

            }

        }

    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div>
            {true && (
                <Line
                    data={chartData} options={{
                        responsive: true,
                        title: { text: 'Price - Last 30 Days', display: true },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            )}

        </div>
    )
}

export default Chart

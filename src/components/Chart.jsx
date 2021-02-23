import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'




/*

commented out line 6846 in node_modules > chart.js > dist > chart.js to fix issue this however 
caused the inability to interact with the chart. 

*/


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

    const chart = async () => {

        let priceArr = []
        let dateArr = []
        let days = getDays(30)
        for (let i = days.length - 1; i >= 0; i--) {
            let url = `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${days[i]}`
            await axios.get(url)
                .then(async res => {
                    if (!res.data.market_data) {
                        console.log('not finding data')
                    } else {
                        await dateArr.push(days[i])
                        await priceArr.push(res.data.market_data.current_price.usd)
                    }

                }).then(() => {
                    if (dateArr.length === days.length) {
                        setChartData({
                            labels: dateArr,
                            datasets: [
                                {
                                    label: [],
                                    data: priceArr,
                                    backgroundColor: [
                                        'rgba(75, 192, 192, 0.6)'
                                    ]
                                }]
                        })
                    }

                })

                .catch((err) => console.log(err))
        }

    }


    useEffect(() => {
        chart()
    }, [])


    return (
        <div>
            <Line
                data={chartData} options={{
                    responsive: true,
                    title: { text: 'Price - Last 30 Days', display: true },
                    elements: {
                        line: {
                            tension: 0
                        }
                    },
                    scales: {

                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }

                        }]
                    }
                }}
            />
        </div>
    )
}

export default Chart

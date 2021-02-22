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

    const chart = async () => {


        let priceArr = []
        let dateArr = []
        let dataArr = []

        for (const day of getDays(30)) {

            let url = `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${day}`
            console.log(url)
            let data = await axios.get(url)
                .then(async res => {

                    //priceArr.push(res.data.market_data.current_price.usd)
                    //dateArr.push(day)
                    // promises.push({
                    //     day: day,
                    //     price: res.data.market_data.current_price.usd
                    // })
                    let eachData = await dataArr.push({
                        day: day,
                        price: res.data.market_data.current_price.usd
                    })
                    let test = await dateArr.push(day)
                    let test2 = await priceArr.push(res.data.market_data.current_price.usd)

                    await console.log(dateArr)
                    await setChartData({
                        labels: dateArr,
                        datasets: [
                            {
                                label: 'Price',
                                data: priceArr,
                                backgroundColor: [
                                    'rgba(75, 192, 192, 0.6)'
                                ]
                            }]
                    })

                }).catch((err) => console.log(err))

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
            )}

        </div>
    )
}

export default Chart

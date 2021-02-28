import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import 'chartjs-plugin-crosshair'
import { Button, makeStyles, Grid } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({

    formControl: {
        margin: 'auto',
        minWidth: 120,
        width: 200,
        "& .MuiOutlinedInput-input": {
            color: theme.palette.secondary.accent,

        },
        "& .MuiInputLabel-root": {
            color: theme.palette.secondary.accent,


        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.accent,

        },
        "&:hover .MuiOutlinedInput-input": {
            color: "white",

        },
        "&:hover .MuiInputLabel-root": {
            color: "white",

        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },

        "& .MuiInputLabel-root.Mui-focused": {
            color: "white"
        },


    },

    selectEmpty: {
        marginTop: theme.spacing(1),
        "&:before": {
            borderColor: theme.palette.secondary.accent
        },

        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'

    },
    test: {
        backgroundColor: 'white',
        color: 'pink',
    }
}))

const Chart = ({ coin }) => {

    const classes = useStyles()

    const [chartData, setChartData] = useState({})

    const [time, setTime] = React.useState('120');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

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
                            pointHoverRadius: 20,
                            data: priceArr,
                            borderWidth: 2,
                            spanGaps: true,
                            backgroundColor: [
                                'rgb(5, 244, 183, .2) '
                            ],

                            borderColor: [
                                '#05f4b7'
                            ]

                        }]
                })


            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        chart(120, 'daily')
    }, [])


    return (
        <>
            <FormControl className={classes.formControl} variant="outlined">
                <Select
                    className={classes.selectEmpty}
                    value={time}
                    onChange={handleChange}
                >
                    <MenuItem onClick={() => chart(2, 'hourly')} value='24'>24h</MenuItem>
                    <MenuItem onClick={() => chart(7, 'daily')} value='7'>7 Day</MenuItem>
                    <MenuItem onClick={() => chart(14, 'daily')} value='14'>14 Day</MenuItem>
                    <MenuItem onClick={() => chart(30, 'daily')} value='30'>30 Day</MenuItem>
                    <MenuItem onClick={() => chart(60, 'daily')} value='60'>60 Day</MenuItem>
                    <MenuItem onClick={() => chart(120, 'daily')} value='120'>120 Day</MenuItem>
                    <MenuItem onClick={() => chart(365, 'daily')} value='Year'>Year</MenuItem>
                </Select>
            </FormControl>

            <div style={{ width: '100%' }}>
                <Line
                    data={chartData} options={{
                        legend: {
                            display: false
                        },
                        plugins: {
                            crosshair: {
                                zoom: {
                                    enabled: false
                                },
                                line: {
                                    color: '#7a5cff',
                                    width: 2
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
                        title: { display: false },
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
                                    beginAtZero: false,
                                    fontColor: 'white'
                                }

                            }]
                        }
                    }}
                />
            </div>
        </>
    )
}

export default Chart



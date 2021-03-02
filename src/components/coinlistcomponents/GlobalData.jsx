import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from './NewsCard';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        color: '#fff',
        textAlign: 'center',
        padding: '1.6rem'

    },
    numColor: {
        color: theme.palette.secondary.accent,
        fontSize: '1.1rem',
        margin: '.5rem'
    }
}))

function GlobalData() {

    const [globalData, setGlobalData] = useState(null)
    const classes = useStyles()

    useEffect(async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/global')
        setGlobalData(res.data.data)
    }, [])
    return (
        <Grid item>
            <Paper className={classes.root}>
                {globalData && (
                    <Grid container>
                        <Grid item md={3} sm={6} xs={12}>
                            <Typography>
                                <Box fontWeight='fontWeightLight'>Active Currencies</Box>
                                <Box fontWeight='bold' className={classes.numColor}>{globalData.active_cryptocurrencies}</Box>
                            </Typography>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Typography>
                                <Box fontWeight='fontWeightLight'>Total Market Cap</Box>
                                <Box fontWeight='bold' className={classes.numColor}>${globalData.total_market_cap.usd.toFixed(2)}</Box>
                            </Typography>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Typography>
                                <Box fontWeight='fontWeightLight'>Total Volume</Box>
                                <Box fontWeight='bold' className={classes.numColor}>${globalData.total_volume.usd.toFixed(2)}</Box>
                            </Typography>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} style={{ marginBottom: '2rem' }}>
                            <Typography>
                                <Box fontWeight='fontWeightLight'>Market Cap (24h%)</Box>
                                <Box fontWeight='bold' className={classes.numColor}>{globalData.market_cap_change_percentage_24h_usd.toFixed(2)}%</Box>
                            </Typography>
                        </Grid>
                        <NewsCard />

                    </Grid>
                )}
            </Paper>
        </Grid>
    )
}

export default GlobalData

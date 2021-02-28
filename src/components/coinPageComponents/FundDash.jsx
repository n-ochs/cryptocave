import React from 'react'
import { Typography, Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    wrapper: {
        textAlign: 'center',
        paddingTop: '4rem',
        marginTop: '.2rem'

    },
    fontNum: {
        fontSize: '1.5rem',

    },
    fontTitle: {
        fontSize: '1.1rem',
        color: theme.palette.secondary.accent

    },
    altColor: {
        color: theme.palette.secondary.accent
    },

}))
function FundDash({ coin }) {
    const classes = useStyles()
    console.log(coin)
    return (
        <>
            <Grid container direction="row" spacing={2} className={classes.wrapper}>
                <Grid item xs={6}>
                    <Typography>
                        <Box className={classes.altColor} className={classes.fontTitle} fontWeight='fontWeightLight'>Price</Box>
                        <Box fontWeight='bold' className={classes.fontNum}>${coin.market_data.current_price.usd}</Box>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Box fontWeight='fontWeightLight' className={classes.fontTitle}>Total Volume</Box>
                        <Box fontWeight='bold' className={classes.fontNum}>${coin.market_data.total_volume.usd}</Box>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Box fontWeight='fontWeightLight' className={classes.fontTitle}>Circulating Supply</Box>
                        <Box fontWeight='bold' className={classes.fontNum}>{coin.market_data.circulating_supply}</Box>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Box fontWeight='fontWeightLight' className={classes.fontTitle}>Total Supply</Box>
                        <Box fontWeight='bold' className={classes.fontNum}>
                            {coin.market_data.total_supply ? coin.market_data.total_supply : <span>No Data</span>}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Box fontWeight='fontWeightLight' className={classes.fontTitle}>24h High</Box>
                        <Box fontWeight='bold' className={classes.fontNum}>${coin.market_data.high_24h.usd}</Box>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        <Box fontWeight='fontWeightLight' className={classes.fontTitle}>24h Low</Box>
                        <Box fontWeight='bold' className={classes.fontNum}>${coin.market_data.low_24h.usd}</Box>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default FundDash

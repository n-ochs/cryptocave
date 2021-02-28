import React from 'react'
import { Typography, Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '.5rem',
        marginRight: '1rem',
        marginBottom: '4rem',


    },
    names: {
        fontSize: '5rem',
        color: '#fff',
        letterSpacing: '.4rem',

    },
    badge: {
        color: theme.palette.secondary.accent,
        padding: '1.5rem',
        fontSize: '1.8rem',
        textAlign: 'center',

    },
    logo: {
        textAlign: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '1rem',
        letterSpacing: '.1rem',
        color: theme.palette.secondary.accent


    }
}))


function CoinHeader({ coin }) {
    const classes = useStyles()

    return (

        <Grid container xs={12} className={classes.root}>
            <Grid item md={1} sm={12} className={classes.logo}>
                <Typography>
                    <img src={coin.image.small}></img>
                    <Box fontWeight='bold'>{coin.symbol.toUpperCase()}</Box>
                </Typography>
            </Grid>

            <Grid item md={4} sm={12}>
                <Typography className={classes.names}>
                    <Box fontWeight='bold'>{coin.id.toUpperCase()}</Box>
                </Typography>
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item md={1} sm={12}>
                <Typography className={classes.badge}>
                    <Box fontWeight='bold'>Rank</Box>
                    <Box fontWeight='bold'>{coin.market_cap_rank}</Box>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CoinHeader

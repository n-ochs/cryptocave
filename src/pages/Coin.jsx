import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import Chart from '../components/coinPageComponents/Chart'
import CoinNewsFeed from '../components/coinPageComponents/CoinNewsFeed'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import FundDash from '../components/coinPageComponents/FundDash'
import SocialStats from '../components/coinPageComponents/SocialStats'
import CoinHeader from '../components/coinPageComponents/CoinHeader'
import CoinDesc from '../components/coinPageComponents/CoinDesc'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    wrapper: {
        marginTop: theme.spacing(18),
        margin: 'auto',
        display: 'flex',
        width: '95%',
        color: '#fff',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(3),

    },
    head: {
        padding: theme.spacing(2),


    },
    fund: {
        padding: theme.spacing(2)
    },
    priceChart: {
        padding: theme.spacing(2)

    },
    desc: {
        padding: theme.spacing(2)
    },
    newsFeed: {
        padding: theme.spacing(2)

    },
    social: {
        paddingBottom: theme.spacing(5)

    }
}))

const Coin = ({ match }) => {

    const classes = useStyles()
    const [coin, setCoin] = useState()

    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])

    useEffect(async () => {
        const response = await Data.getCoins(`coins/${match.params.id}`)
        setCoin(response)
    }, [])
    return (
        <Grid container className={classes.root} spacing={0}>
            {coin && (
                <Grid container className={classes.wrapper}>
                    <Grid container className={classes.head} md={12} justify='flex-start'>
                        <CoinHeader coin={coin} />
                    </Grid>
                    <Grid container className={classes.social} md={12}>
                        <SocialStats coin={coin} />
                    </Grid>
                    <Grid container className={classes.priceChart} md={8} sm={12}>
                        <Chart coin={coin} />
                    </Grid>
                    <Grid container className={classes.fund} md={4} sm={12}>
                        <FundDash coin={coin} style={{ width: '100%' }} />
                    </Grid>

                    <Grid container className={classes.desc} md={6}>
                        <CoinDesc coin={coin} />

                    </Grid>
                    <Grid container className={classes.newsFeed} md={6}>
                        <CoinNewsFeed coin={coin} />
                    </Grid>

                </Grid>

            )}
        </Grid>
    )
}

export default Coin

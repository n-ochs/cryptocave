import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'
import { Paper, Grid, Typography, IconButton, Box } from '@material-ui/core'
import SmallChart from '../components/SmallChart'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '90%',
        margin: 'auto',
    },

    headers: {
        margin: 'auto',
        paddingBottom: theme.spacing(5)

    },
}))


const CoinList = () => {
    const classes = useStyles()

    const [coins, setCoins] = useState(null)
    const [watchlistButton, setWatchlistButton] = useState(true)

    let priceColor = null

    useEffect(async () => {
        const res = await Data.getCoins(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        setCoins(res)
    }, [])

    return (
        <>
            {coins && (
                <Box
                    component={Grid}
                    container
                    className={classes.wrapper}


                >
                    <Typography
                        className={classes.headers}
                        variant="h3"
                    >
                        Top Cryptocurrencies
                    </Typography>
                    <Box
                        component={Grid}
                        container
                        className={classes.headers}
                        boxShadow={3}
                        spacing={0}
                        justifyContent="space-between"
                    >
                        <Grid item sm={0} />
                        <Grid item sm={0}>
                            <Typography variant="h6">Rank</Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <Typography variant="h6">Name</Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <Typography variant="h6"> Symbol</Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <Typography variant="h6">Price</Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <Typography variant="h6">24h%Change</Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <Typography variant="h6">Mkt Cap</Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="h6">Last 24h</Typography>
                        </Grid>
                    </Box>
                    {coins.map((coin) => (

                        <Box container
                            component={Grid}
                            boxShadow={3}
                            alignItems="center"
                            justifyContent="space-between"

                        >
                            <Grid item sm={0} key={coin.name}>
                                <IconButton onClick={() => setWatchlistButton(!watchlistButton)}>
                                    {watchlistButton ? <StarBorderIcon /> : <StarIcon />}
                                </IconButton>
                            </Grid>


                            <Grid item sm={0}>
                                <Typography variant="body1">
                                    {coin.market_cap_rank}
                                </Typography>
                            </Grid>
                            <Grid item sm={1} component={Link} to={`/coins/${coin.id}`}>
                                <Typography variant="body1">
                                    {coin.name}
                                </Typography>

                            </Grid>
                            <Grid item sm={1}>
                                <Typography variant="body1">
                                    {coin.symbol.toUpperCase()}
                                </Typography>

                            </Grid>
                            <Grid item sm={1} className={classes.individualContainers}>
                                <Typography variant="body1">
                                    ${coin.current_price.toFixed(2)}
                                </Typography>

                            </Grid>
                            <Grid item sm={1} style={{ color: `${priceColor}` }}>

                                <Typography variant="body1" style={{ color: `${priceColor}` }}>
                                    {coin.price_change_24h.toFixed(2)}%
                                </Typography>

                            </Grid>
                            <Grid item sm={1} className={classes.individualContainers}>
                                <Typography variant="body1">
                                    ${coin.market_cap}
                                </Typography>

                            </Grid>
                            <Grid item sm={3} className={classes.individualContainers} >
                                <div style={{ height: '10vh' }}>
                                    <SmallChart coin={coin} price={coin.price_change_24h} />
                                </div>
                            </Grid>

                        </Box>
                    ))}
                </Box>
            )
            }
        </>
    )
}

export default CoinList




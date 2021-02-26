import React, { useEffect, useState, useContext } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'
import { Paper, Grid, Typography, CssBaseline, IconButton } from '@material-ui/core'
import SmallChart from '../components/SmallChart'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { GlobalContext } from '../context/GlobalState'


const CoinList = () => {

    const [coins, setCoins] = useState(null)



    useEffect(async () => {
        const res = await Data.getCoins(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        setCoins(res)
    }, [])


    return (
        <>
            {coins && (
                <Paper style={{ width: '100%' }}>
                    <Paper>
                        <Grid container
                            alignItems="center"
                            justify="center"
                            spacing={4}
                        >
                            <Grid item sm={1} />
                            <Grid item sm={1}>
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
                                <Typography variant="h6">24h</Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <Typography variant="h6">Total Vol</Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <Typography variant="h6">Mkt Cap</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h6">Last 24h</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    {coins.map((coin) => (
                        <Paper key={coin.name}>
                            <Grid container
                                alignItems="center"
                                justify="center"
                                spacing={4}>
                                <Grid item sm={1}>
                                    <IconButton>
                                        <StarBorderIcon

                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.market_cap_rank}
                                </Grid>
                                <Grid item sm={1} component={Link} to={`/coins/${coin.id}`}>
                                    {coin.name}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.symbol.toUpperCase()}
                                </Grid>
                                <Grid item sm={1}>
                                    ${coin.current_price.toFixed(2)}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.price_change_24h.toFixed(2)}%
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.total_volume}
                                </Grid>
                                <Grid item sm={1}>
                                    ${coin.market_cap}
                                </Grid>
                                <Grid item sm={2}>
                                    <div style={{ width: '15rem', height: '3rem' }}>
                                        <SmallChart coin={coin} price={coin.price_change_24h} />
                                    </div>
                                </Grid>

                            </Grid>
                        </Paper>
                    ))}
                </Paper>
            )}
        </>
    )
}

export default CoinList


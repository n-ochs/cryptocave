import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'
import SearchCoins from '../components/SearchCoins'
import { Paper, Grid } from '@material-ui/core'
import SmallChart from '../components/SmallChart'


const CoinList = () => {

    const [coins, setCoins] = useState(null)

    useEffect(async () => {
        const res = await Data.getCoins(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        setCoins(res)
        console.log(coins)
    }, [])


    return (
        <>
            <SearchCoins />
            {coins && (
                <Paper>
                    <Paper>
                        <Grid container>
                            <Grid item sm={1}>Rank</Grid>
                            <Grid item sm={1}>Name</Grid>
                            <Grid item sm={1}>Symbol</Grid>
                            <Grid item sm={1}>Price</Grid>
                            <Grid item sm={1}>Price Change% (24h)</Grid>
                            <Grid item sm={1}>Total Volume</Grid>
                            <Grid item sm={1}>Market Cap</Grid>
                            <Grid item sm={1}>Last 24h</Grid>
                        </Grid>
                    </Paper>
                    {coins.map((coin) => (
                        <Paper key={coin.name}>
                            <Grid container component={Link} to={`/coins/${coin.id}`}>
                                <Grid item sm={1}>
                                    {coin.market_cap_rank}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.name}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.symbol.toUpperCase()}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.current_price}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.price_change_24h}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.total_volume}
                                </Grid>
                                <Grid item sm={1}>
                                    {coin.market_cap}
                                </Grid>
                                <Grid item sm={1}>
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


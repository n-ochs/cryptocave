import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'

const Coin = ({ match }) => {

    const [coin, setCoin] = useState()

    useEffect(async () => {

        const response = await Data.getCoins(`coins`)
        const found = await response.find(o => match.params.id === o.id)
        setCoin(found)

    }, [match.params.id])

    return (
        <div>
            {coin && (
                <div>
                    <img src={coin.image.large}></img>
                    <h1>{coin.id} - {coin.symbol}</h1>
                    <h3>last price: ${coin.market_data.current_price.usd}</h3>
                </div>
            )}
            Coin individual - this will include coin name, ticker symbol, written overview of coin/business, fundamental data including volume, market cap etc, a time series line chart that will default to a certain time period (last 24h for example),  along with bigger buttons for addding to portfolio and watchlist.
        </div>
    )
}

export default Coin

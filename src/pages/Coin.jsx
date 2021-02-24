import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import Chart from '../components/Chart'

const Coin = ({ match }) => {


    const [coin, setCoin] = useState()

    useEffect(async () => {
        const response = await Data.getCoins(`coins/${match.params.id}`)
        setCoin(response)
    }, [match.params.id])

    return (
        <div>
            {coin && (
                <div>
                    <img src={coin.image.large}></img>
                    <h1>{coin.id} - {coin.symbol}</h1>
                    <h3>last price: ${coin.market_data.current_price.usd}</h3>
                    <Chart coin={coin} />
                    <p>{coin.description.en}</p>
                </div>
            )}
        </div>
    )
}

export default Coin

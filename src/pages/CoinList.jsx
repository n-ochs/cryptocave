import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'


const CoinList = ({ match }) => {

    const [coins, setCoins] = useState(null)

    useEffect(async () => {
        const res = await Data.getCoins(`coins/list`)
        console.log(res)
        setCoins(res)
    }, [match.params.id])


    return (
        <div>
            {coins && (
                <ul>
                    {coins.map((coin) => (
                        <Link to={`/coins/${coin.id}`}>
                            <li key={coin.id}>
                                {coin.id}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
            coin list - standard list of coins, include market cap, current price, add button that once clicked expands to watchlist and portfolio. potentially have mini charts next to each coin as a quick visual overview of price action. custom sorting based on price, market cap , name etc
        </div>
    )
}

export default CoinList

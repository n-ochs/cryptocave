import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'


const CoinList = ({ match }) => {

    const [coins, setCoins] = useState(null)

    useEffect(async () => {
        const res = await Data.getCoins(`coins/list`)
        setCoins(res)
    }, [match.params.id])


    return (
        <div>
            {coins && (
                <ul>
                    {coins.map((coin) => (
                        <Link to={`/coins/${coin.id}`} key={coin.id}>
                            <li>
                                {coin.id}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CoinList




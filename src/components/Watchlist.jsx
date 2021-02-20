import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import CoinCardWatchlist from '../components/CoinCardWatchlist'

const Watchlist = ({ }) => {
    const { watchlist } = useContext(GlobalContext)

    return (
        <div>
            {watchlist.length > 0 ? (
                <div>
                    {watchlist.map(coin => <CoinCardWatchlist coin={coin} type="watchlist" />)}
                </div>
            ) : (<h1>No coins added</h1>)}
        </div>
    )
}

export default Watchlist

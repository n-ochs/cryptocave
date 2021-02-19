import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Watchlist = ({ }) => {
    const { watchlist } = useContext(GlobalContext)
    return (
        <div>
            Watchlist - add remove button and price - add button badge to indicate length of watchlist array to user - maybe icon at bottom instead of nav item
            {watchlist.map((coin) => {
                return <h1>{coin.symbol}</h1>

            })}


        </div>
    )
}

export default Watchlist

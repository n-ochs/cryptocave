import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const Buttons = ({ coin, type }) => {
    const { removeCoinFromWatchlist } = useContext(GlobalContext)
    return (

        <div>
            {type === 'watchlist' && (
                <button
                    onClick={() => removeCoinFromWatchlist(coin.symbol)}>-</button>
            )}
        </div>
    )
}
export default Buttons

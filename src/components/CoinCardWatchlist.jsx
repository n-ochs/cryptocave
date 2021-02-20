import React from 'react'
import Buttons from './Buttons'

const CoinCardWatchlist = ({ coin, type }) => {
    return (
        <div>
            <h3
                key={coin.symbol}>{coin.symbol}
                <Buttons type={type} coin={coin} />
            </h3>

        </div>
    )
}

export default CoinCardWatchlist

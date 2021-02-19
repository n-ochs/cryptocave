import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { Data } from '../components/methods/DataAPIs'

const test = async () => {
    const res = await Data.getCoins('coins')
    console.log(res)
}

const SearchCoinResults = ({ coinSearch }) => {

    const { addCoinWatchlist, watchlist, addCoinPortfolio, portfolio } = useContext(GlobalContext)

    let storedWatchlist = watchlist.find((id) => id.symbol === coinSearch.coin.symbol)
    let storedPortfolio = portfolio.find((id) => id.symbol === coinSearch.coin.symbol)

    const coinDisableWatchlist = storedWatchlist ? true : false
    const coinDisablePortfolio = storedPortfolio ? true : false

    return (
        <div>

            <Link to={`/coins/${coinSearch.coin.id}`}>
                <span>{coinSearch.coin.symbol.toUpperCase() + ' - '}</span>
                <span>{coinSearch.coin.name}</span>
            </Link>
            <span>
                <span><button onClick={() => addCoinWatchlist(coinSearch.coin)} disabled={coinDisableWatchlist}>+W</button></span>
                <span><button onClick={() => addCoinPortfolio(coinSearch.coin)} disabled={coinDisablePortfolio}>+P</button></span>
            </span>

        </div>
    )
}

export default SearchCoinResults


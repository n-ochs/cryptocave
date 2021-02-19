import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'

const SearchCoinResults = ({ coin }) => {

    const { addCoinWatchlist, watchlist, addCoinPortfolio, portfolio } = useContext(GlobalContext)

    let storedWatchlist = watchlist.find((id) => id.symbol === coin.obj.symbol)
    let storedPortfolio = portfolio.find((id) => id.symbol === coin.obj.symbol)

    const coinDisableWatchlist = storedWatchlist ? true : false
    const coinDisablePortfolio = storedPortfolio ? true : false

    return (
        <div>

            <Link to={`/coins/${coin.obj.id}`}>
                <img src={coin.obj.image.thumb} alt={coin.obj.id} />
                <span>{coin.obj.symbol.toUpperCase() + ' - '}</span>

                <span>
                    <span>{coin.obj.id}</span>
                    <span>{' || CURRENT PRICE: ' + coin.obj.market_data.current_price.usd}</span>
                    <span>{' || MARKET CAP: ' + coin.obj.market_data.market_cap.usd}</span>
                </span>
            </Link>
            <span>
                <span><button onClick={() => addCoinWatchlist(coin.obj)} disabled={coinDisableWatchlist}>+W</button></span>
                <span><button onClick={() => addCoinPortfolio(coin.obj)} disabled={coinDisablePortfolio}>+P</button></span>
            </span>

        </div>
    )
}

export default SearchCoinResults


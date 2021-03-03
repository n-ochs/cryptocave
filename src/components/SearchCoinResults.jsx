import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import Popup from '../components/controls/Popup'
import AddPortfolioForm from './AddPortfolioForm'


const SearchCoinResults = ({ coinSearch }) => {

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }


    const { addCoinWatchlist, watchlist, addCoinPortfolio, portfolio } = useContext(GlobalContext)

    const [buttonPopup, setButtonPopup] = useState(false)

    let storedWatchlist = watchlist.find((id) => id.symbol === coinSearch.coin.symbol)

    const coinDisableWatchlist = storedWatchlist ? true : false

    return (
        <>
            <Link to={`/coins/${coinSearch.coin.id}`} onClick={refreshPage}>
                <span>{coinSearch.coin.symbol.toUpperCase() + ' - '}</span>
                <span>{coinSearch.coin.name}</span>
            </Link>

        </>
    )
}


export default SearchCoinResults


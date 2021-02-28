import React, { useContext, useEffect, useState } from 'react';
import CoinCardWatchlist from '../components/CoinCardWatchlist';
import { createWatchlist } from '../components/methods/BackendConnection/Watchlist';
import axios from 'axios';

const Watchlist = ({ }) => {
    const [watchlist, setWatchlist] = useState(null)

    useEffect(async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/watchlist`)
        .then((data) => {
            setWatchlist(data.data)
            console.log(data.data)
        })
        .catch(() => {
            console.log('error')
        })
    }, []);
    
    return (
        <div>
            {/* {watchlist.length > 0 ? (
                <div>
                    {watchlist.map(coin => <CoinCardWatchlist coin={coin} type="watchlist" key={coin.id} />)}
                </div>
            ) : (<h1>No coins added</h1>)} */}
            <div>
                <button onClick={createWatchlist}>Create</button>
                <div>
                    {watchlist && (watchlist.map(coin => <p>{coin.coin}</p>))}
                </div>
            </div>
        </div>
    )
}

export default Watchlist

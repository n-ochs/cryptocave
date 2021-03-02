import React, { useContext, useEffect, useState } from 'react';
import CoinCardWatchlist from '../components/CoinCardWatchlist';
import { createWatchlist } from '../components/methods/BackendConnection/Watchlist';
import axios from 'axios';
import WatchlistCard from './WatchlistCard';

const Watchlist = () => {
    const [loading, setLoading] = useState(true);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/watchlist`)
        .then((response) => {
            let newArray = [];
            response.data.forEach(async (coin) => {
                await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.coin}`)
                .then((result) => {
                    newArray.push(result)
                    setWatchlist(newArray)
                })
                .catch(() => {
                    console.log('Error');
                });
            });
        })
        .catch(() => {
            console.log('Error2')
        });
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <button onClick={createWatchlist}>Create</button>
            {loading ? 'loading...' : <WatchlistCard watchlist={watchlist}/>}
        </div>
    );
};

export default Watchlist;
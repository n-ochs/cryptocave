import React, { useContext, useEffect, useState } from 'react';
import CoinCardWatchlist from '../components/CoinCardWatchlist';
import { createWatchlist } from '../components/methods/BackendConnection/Watchlist';
import axios from 'axios';
import { Data } from '../components/methods/DataAPIs'

const Watchlist = ({ }) => {
    const [watchlist, setWatchlist] = useState(null)

    useEffect(async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/watchlist`)
        .then(async (response) => {
            setWatchlist(response.data)
            let newArray = []
            response.data.forEach((coin) => {
                axios.get(`https://api.coingecko.com/api/v3/coins/${coin.coin}`)
                .then((result) => {
                    newArray.push(result)
                })
                .catch(() => {
                    console.log('Error');
                });
            })
            console.log(newArray) //setWatchlist()
        })
        .catch(() => {
            console.log('Error')
        });
    }, []);
    
    return (
        <div>
            <div>
                <button onClick={createWatchlist}>Create</button>
                <div>
                    {watchlist && (watchlist.map(coin => <p key={coin.coin}>{coin.coin}</p>))}
                </div>
            </div>
        </div>
    )
}

export default Watchlist

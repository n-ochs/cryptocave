import React, { useContext, useEffect, useState } from 'react';
import CoinCardWatchlist from '../components/CoinCardWatchlist';
import { createWatchlist } from '../components/methods/BackendConnection/Watchlist';
import axios from 'axios';
import WatchlistCard from './WatchlistCard';
import { makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        width: '100vw',
        paddingTop: '8.5rem',
        display: 'flex',

    },
    wrapper: {
        justifyContent: 'center',
        width: '85%',

    },

}))


const Watchlist = () => {
    const classes = useStyles()

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
        <Grid container justify='center' className={classes.root}>
            <Typography variant='h2' style={{ 'font-weight': 'bold', marginBottom: '2.2rem', fontSize: '5rem', color: '#fff' }}>Watchlist <button onClick={createWatchlist}>Create</button></Typography>

            <Grid container className={classes.wrapper}>

                {loading ? 'loading...' : <WatchlistCard watchlist={watchlist} />}
            </Grid>
        </Grid>
    );
};

export default Watchlist;
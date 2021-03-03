import React, { useEffect, useState, Component } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'
import { Paper, Grid, Typography, IconButton, Box, TableBody, TableCell, TableRow, Table, TableHead, TablePagination, Button } from '@material-ui/core'
import SmallChart from '../components/SmallChart'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles'
import { addToWatchlist, deleteFromWatchlist } from '../components/methods/BackendConnection/Watchlist'
import axios from 'axios';
import NewsCard from '../components/coinlistcomponents/NewsCard'
import GlobalData from '../components/coinlistcomponents/GlobalData'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '8.5rem',
        overflow: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
    },
    test: {
        color: theme.palette.secondary.accent,
        marginTop: theme.spacing(5),

    },
    star: {
        color: theme.palette.secondary.accent,
        fillColor: theme.palette.secondary.accent,
        '&:hover': {
            transform: "scale3d(1.3, 1.3, 1)"
        },
    },
    tableContainer: {
        marginTop: theme.spacing(10),
        '& thead th': {
            color: 'white',
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: 500,
            color: '#fff',
        },
        '& tbody tr:hover': {
            backgroundColor: theme.palette.primary.light,
            cursor: 'pointer',
        },

    },

}));

const CoinList = (props) => {
    const classes = useStyles();
    const [coins, setCoins] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(async () => {
        await Data.getCoins(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${rowsPerPage}&page=${page + 1}&sparkline=false`)
            .then((res) => {
                setCoins(res);
                const defaultStars = [
                    { starFilled: false },
                    { starFilled: false },
                    { starFilled: false },
                    { starFilled: false },
                    { starFilled: false },
                ];
                setStar(defaultStars);
            })
            .catch(() => {
                console.log('error from API');
            });
    }, [page, rowsPerPage]);

    //Pre-filling stars based on user's watchlist
    // const [watchlist, setWatchlist] = useState(null)
    // console.log(coins)

    // useEffect(async () => {
    //     await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/watchlist`)
    //     .then((data) => {
    //         setWatchlist(data.data)
    //         console.log(watchlist)
    //         let alreadyWatched = watchlist.map((coin) => {

    //         })
    //     })
    //     .catch(() => {
    //         console.log('error')
    //     })
    // }, []);

    // console.log(watchlist)

    const [star, setStar] = useState([
        { starFilled: false },
        { starFilled: false },
        { starFilled: false },
        { starFilled: false },
        { starFilled: false },
    ]);

    const toggleStar = (i, coin) => {
        addToWatchlist(coin)
            .then(() => {
                let newStars = star.map((star, index) => {
                    if (i === index) {
                        return {
                            ...star,
                            starFilled: !star.starFilled
                        };
                    } else {
                        return star;
                    };
                });
                setStar(newStars);
            })
            .catch(() => {
                deleteFromWatchlist(coin)
                let newStars = star.map((star, index) => {
                    if (i === index) {
                        return {
                            ...star,
                            starFilled: !star.starFilled
                        };
                    } else {
                        return star;
                    };
                });
                setStar(newStars);
            });
    };


    const { history } = props
    const handleCoinClick = (coin) => {
        history.push(`/coins/${coin}`)
    }

    return (
        <Grid container justify='center' className={classes.root}>
            <Typography variant='h2' style={{ 'font-weight': 'bold', marginBottom: '2.2rem', fontSize: '5rem' }}>Crypto Market</Typography>
            <Grid item xs={10} className={classes.test}>
                <GlobalData />
                <Table className={classes.tableContainer}>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Rank</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Coin</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>24h%Change</TableCell>
                            <TableCell>Market Cap</TableCell>
                            <TableCell>Last 24h Chart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins && (
                            coins.map((coin, i) => (
                                <TableRow key={coin.id} className={classes.tableData}>
                                    <TableCell>
                                        <IconButton key={i} onClick={() => toggleStar(i, coin.id)} className={classes.star}>
                                            {star[i].starFilled ? <StarIcon /> : <StarBorderIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell onClick={() => handleCoinClick(coin.id)}>{coin.market_cap_rank}</TableCell>
                                    <TableCell onClick={() => handleCoinClick(coin.id)}>{coin.name}</TableCell>
                                    <TableCell onClick={() => handleCoinClick(coin.id)}>{coin.symbol.toUpperCase()}</TableCell>
                                    <TableCell onClick={() => handleCoinClick(coin.id)}>${coin.current_price.toFixed(2)}</TableCell>
                                    <TableCell onClick={() => handleCoinClick(coin.id)}>{coin.price_change_24h}%</TableCell>
                                    <TableCell onClick={() => handleCoinClick(coin.id)}> ${coin.market_cap}</TableCell>
                                    <TableCell>
                                        <div style={{ height: '10vh', width: '25vw' }} >
                                            <SmallChart coin={coin} price={coin.price_change_24h} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )))
                        }
                    </TableBody>
                </Table>
                {coins && (
                    <TablePagination
                        style={{ color: '#fff' }}
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={100}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                )}

            </Grid>
        </Grid>
    );
};

export default CoinList;
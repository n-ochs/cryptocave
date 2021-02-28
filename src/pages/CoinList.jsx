import React, { useEffect, useState, Component } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'
import { Paper, Grid, Typography, IconButton, Box, TableBody, TableCell, TableRow, Table, TableHead, TablePagination, Button } from '@material-ui/core'
import SmallChart from '../components/SmallChart'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    root: {

        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(10)
    },
    tableContainer: {
        minWidth: '85rem',
        marginTop: theme.spacing(3),
        '& thead th': {
            color: 'white',
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#ededed',
        },
        tableRow: {
            '&:hover': {
                backgroundColor: '#ededed',
                cursor: 'pointer',
            }

        }
    }
}))


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
        })
        .catch(() => {
            console.log('error from API');
        });
    }, [page, rowsPerPage]);

    const { onSelectAllClick, numSelected, rowCount } = props;

    const [star, setStar] = useState([
        {starFilled: false},
        {starFilled: false},
        {starFilled: false},
        {starFilled: false},
        {starFilled: false},
    ]);

    const toggleStar = (i) => {
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
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.test}>
                <Typography variant='h3' style={{ 'font-weight': 'bold' }}>Top Cryptocurrencies</Typography>
                <Table className={classes.tableContainer}>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Rank</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Coin</TableCell>
                            <TableCell>24h%Change</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Market Cap</TableCell>
                            <TableCell>Last 24h Chart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins && (
                            coins.map((coin, i) => (
                                <TableRow key={coin.id}>
                                    <TableCell><button key={i} onClick={() => toggleStar(i)}>{star[i].starFilled ? <StarIcon /> : <StarBorderIcon />}</button>{i}</TableCell>
                                    <TableCell>{coin.market_cap_rank}</TableCell>
                                    <TableCell component={Link} to={`/coins/${coin.id}`} className={classes.tableRow}><Button>{coin.name}</Button></TableCell>
                                    <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                                    <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                                    <TableCell>{coin.price_change_24h.toFixed(2)}%</TableCell>
                                    <TableCell> ${coin.market_cap}</TableCell>
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
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={100}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                )}

            </Paper>
        </div>
    )
}

export default CoinList




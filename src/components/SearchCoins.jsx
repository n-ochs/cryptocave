import React, { useState, useEffect } from 'react'
import SearchCoinResults from './SearchCoinResults'
import { Filters } from './methods/Filters.js'
import { Data } from './methods/DataAPIs'
import { makeStyles, Paper, Grid } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    gridContainer: {
        position: 'absolute',
        zIndex: '1000',
        backgroundColor: 'white'
    }
}))

const SearchCoins = () => {

    const classes = useStyles()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }


    useEffect(async () => {

        const tempResultsArray = []

        const response = await Data.getCoins('coins/list')
        response.filter((coin) => {
            if (Filters.textSearch(coin.id, query) || Filters.textSearch(coin.symbol, query)) {
                tempResultsArray.push({ coin })
            }
        })

        if (query === '') {
            setResults([])
        } else {
            setResults(tempResultsArray.sort((a, b) => a.coin.id.length - b.coin.id.length).slice(0, 10))
        }
    }, [query])

    return (
        <>

            <input
                type="text"
                placeholder="Search Coins"
                value={query}
                onChange={onChange}

            />

            {results && (
                <Paper elevation={3}>

                    <Grid container className={classes.gridContainer} direction='column'>
                        {results.map((coin) => (
                            <Grid item key={coin.coin.id}>
                                <SearchCoinResults coinSearch={coin} className={classes.input} />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            )
            }
        </>
    )
}

export default SearchCoins

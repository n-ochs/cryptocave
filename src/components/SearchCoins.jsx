import React, { useState, useEffect } from 'react'
import SearchCoinResults from './SearchCoinResults'
import { Filters } from './methods/Filters.js'
import { Data } from './methods/DataAPIs'
import { makeStyles, Paper, Grid, Input } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    gridContainer: {
        position: 'absolute',
        zIndex: '1000',
        backgroundColor: 'white',
        border: '1px solid grey',
        left: '79%',
        top: '50px'

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

            <Input
                style={{ marginLeft: 'auto', backgroundColor: 'white', borderRadius: 3, width: '20%' }}
                placeholder="Search currencies"
                color="secondary"
                value={query}
                onChange={onChange}
            />

            {results && (
                <Paper elevation={3}>

                    <Grid container className={classes.gridContainer} direction='column' sm={3}>
                        {results.map((coin) => (
                            <Grid item key={coin.coin.id}>
                                <SearchCoinResults coinSearch={coin} className={classes.input} />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            )}

        </>
    )
}

export default SearchCoins

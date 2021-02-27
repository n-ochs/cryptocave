import React, { useState, useEffect } from 'react'
import SearchCoinResults from './SearchCoinResults'
import { Filters } from './methods/Filters.js'
import { Data } from './methods/DataAPIs'
import { makeStyles, Paper, Grid, Input, fade, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    gridContainer: {
        position: 'absolute',
        zIndex: '1000',
        backgroundColor: 'white',
        left: '79%',
        top: '50px',

    },
    searchbar: {
        marginLeft: 'auto',
        color: 'white',

        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        transition: "transform 0.15s ease-in-out",
        backgroundColor: fade(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.45),
            transform: "scale3d(1.09, 1.09, 1)"
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        },


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
                placeholder="Search currencies"
                color="secondary"
                value={query}
                onChange={onChange}
                className={classes.searchbar}
                startAdornment={<SearchIcon />}
            />

            {results && (

                <Grid container className={classes.gridContainer} direction='column'>
                    {results.map((coin) => (
                        <Grid item key={coin.coin.id}>
                            <SearchCoinResults coinSearch={coin} className={classes.input} />
                        </Grid>
                    ))}
                </Grid>
            )}

        </>
    )
}

export default SearchCoins

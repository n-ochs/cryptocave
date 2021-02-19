import React, { useState, useEffect } from 'react'
import SearchCoinResults from './SearchCoinResults'
import { Filters } from './methods/Filters.js'
import { Data } from './methods/DataAPIs'


const SearchCoins = () => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }


    useEffect(async () => {

        const tempResultsArray = []

        const response = await Data.getCoins('coins')
        response.filter((coin) => {
            if (Filters.textSearch(coin.id, query) || Filters.textSearch(coin.symbol, query)) {
                tempResultsArray.push({ obj: coin })
            }
        })

        if (query === '') {
            setResults([])
        } else {
            setResults(tempResultsArray)
        }
    }, [query])

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search Coins"
                    value={query}
                    onChange={onChange}
                />
            </div>
            {results && (
                <ul>
                    {results.map((coin) => (
                        <li
                            key={coin.obj.symbol}>
                            <SearchCoinResults coin={coin} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchCoins

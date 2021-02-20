import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchlist: [],
    portfolio: []
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addCoinWatchlist = coin => {
        dispatch({ type: 'ADD_COIN_WATCHLIST', payload: coin })
    }
    const addCoinPortfolio = coin => {
        dispatch({ type: 'ADD_COIN_PORTFOLIO', payload: coin })
    }

    const removeCoinFromWatchlist = (symbol) => {
        dispatch({ type: 'REMOVE_COIN_FROM_WATCHLIST', payload: symbol })
    }
    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                portfolio: state.portfolio,
                addCoinWatchlist,
                addCoinPortfolio,
                removeCoinFromWatchlist
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
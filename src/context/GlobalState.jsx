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
    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                portfolio: state.portfolio,
                addCoinWatchlist,
                addCoinPortfolio
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
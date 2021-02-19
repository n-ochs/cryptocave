export default (state, action) => {
    switch (action.type) {
        case 'ADD_COIN_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case 'ADD_COIN_PORTFOLIO':
            return {
                ...state,
                portfolio: [action.payload, ...state.portfolio]
            }
        default:
            return state
    }
}
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Portfolio = ({ }) => {
    const { portfolio } = useContext(GlobalContext)
    return (
        <div>
            portfolio to include chart js, purchased coins, performance tracking, bank roll, 
            
            {portfolio.map((coin) => {
                return <h1>{coin.symbol}</h1>

            })}


        </div>
    )
}

export default Portfolio

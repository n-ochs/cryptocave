import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchCoins from './SearchCoins'


const Nav = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const details = isLoggedIn ? 'SignUp' : 'Profile'





    return (
        <nav>
            <div>
                <Link to="/">Crypto Cave</Link>
            </div>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/watchlist">Watchlist</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/coinlist">Coins</Link>
                </li>
                <li>
                    <Link to="/newslist">News</Link>
                </li>
                <li>
                    <Link to="/alerts">Alerts</Link>
                </li>
                <li>
                    <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
                        <Link to={`/${details}`}>{details}</Link>
                    </button>
                </li>
                <li>
                    <div><SearchCoins /></div>
                </li>



            </ul>

        </nav>
    )
}

export default Nav
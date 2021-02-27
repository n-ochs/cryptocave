import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import NewsList from './pages/NewsList'
import Portfolio from './pages/Portfolio'
import WatchList from './components/Watchlist'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Form from './components/Form'
import Coin from './pages/Coin'
import CoinList from './pages/CoinList'
import { GlobalProvider } from './context/GlobalState'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './components/ui/Themes'


function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>

                <GlobalProvider>
                    <BrowserRouter>
                        <Nav />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/newslist" component={NewsList} />
                            <Route path="/watchlist" component={WatchList} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/signup" component={Form} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/coinlist" component={CoinList} />
                            <Route path="/coins/:id" component={Coin} />
                        </Switch>
                    </BrowserRouter>
                </GlobalProvider>

            </ThemeProvider>
        </>
    );
};

export default App




import React from 'react'
import { Typography, Button, makeStyles, Card } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Hero from '../components/HomeComponents/Hero'
import Discover from '../components/HomeComponents/Discover'
import Research from '../components/HomeComponents/Research'
import Expand from '../components/HomeComponents/Expand'
import SignUpHome from '../components/HomeComponents/SignUpHome'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        background: 'rgba(0,0,0,0.3)',
        minHeight: '100vh',
        width: '100vw'
    },
}))

function Home() {

    const classes = useStyles()

    return (

        <div className={classes.root}>
            <Hero />
            <Discover />
            <Research />
            <Expand />
            <SignUpHome />
        </div>

    )
}

export default Home

// <Button component={Link} to='/signup'>sign up</Button> 
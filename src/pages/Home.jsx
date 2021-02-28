import React from 'react'
import { Typography, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Hero from '../components/HomeComponents/Hero'
import Features from '../components/HomeComponents/Features'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',


    }
}))

function Home() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Hero />
            <Features />
        </div>
    )
}

export default Home

// <Button component={Link} to='/signup'>sign up</Button> 
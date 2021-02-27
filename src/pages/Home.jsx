import React from 'react'
import { Typography, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Colors from '../components/Colors'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',

    }
}))

function Home() {

    return (
        <>
            <Hero />
        </>
    )
}

export default Home

// <Button component={Link} to='/signup'>sign up</Button> 
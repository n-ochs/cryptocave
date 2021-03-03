import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Grow, Typography, Paper } from '@material-ui/core'
import useWindowPosition from '../hooks/useWindowPosition'
import ScrollButton from './ScrollButton'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        alignItems: 'flex-end',

    },
    titleWrapper: {
        marginRight: 'auto',
        marginLeft: '2rem',
        textAlign: 'left'

    },
    titleText: {
        color: '#fff',
        fontSize: '6.5rem',
    },
    contentText: {
        color: '#fff',
        fontSize: '1.5rem',
        marginLeft: '2rem',


    },
    down: {
        textAlign: 'center',
        margin: 'auto'
    }

}))

function Discover() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'signup'


    return (

        <Grid container id="expand" className={classes.root}>
            <Grid item xs={12}></Grid>
            <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
                <Paper style={{ backgroundColor: 'transparent' }}>
                    <Grid item xs={4} className={classes.titleWrapper}>
                        <Typography variant='h3' className={classes.titleText}>Grow Your Accounts</Typography>
                    </Grid>
                    <Grid item xs={4} checked={checked} className={classes.contentWrapper}>
                        <Typography variant='subtitle1' className={classes.contentText}>Manage your portfolio and keep track of all your Crypto investments in one, centralized location. Add, remove and update expenses to ensure your portfolio is completely optimized and up to date. </Typography>
                    </Grid>
                </Paper>
            </Grow>
            <Grid item xs={12} className={classes.down}>
                <ScrollButton section={section} />
            </Grid>

        </Grid>
    )
}

export default Discover

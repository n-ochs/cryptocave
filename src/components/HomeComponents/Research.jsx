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
    paperWrapper: {
        textAlign: 'right',
        marginRight: '2rem'

    },
    descWrapper: {
        marginLeft: 'auto'
    },
    titleGrid: {
        marginLeft: 'auto'
    },
    titleText: {
        color: '#fff',
        fontSize: '6.5rem',

    },
    contentText: {
        color: '#fff',
        fontSize: '1.5rem',
    },
    down: {
        textAlign: 'center',
        margin: 'auto',

    }

}))

function Discover() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'expand'


    return (

        <Grid container id="research" className={classes.root}>
            <Grid item xs={12}></Grid>
            <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
                <Paper style={{ backgroundColor: 'transparent' }} className={classes.paperWrapper}>
                    <Grid item xs={4} className={classes.titleGrid}>
                        <Typography variant='h3' className={classes.titleText}>Stay Informed</Typography>
                    </Grid>
                    <Grid item xs={4} checked={checked} className={classes.descWrapper}>
                        <Typography variant='subtitle1' className={classes.contentText}>Create your own custom watchlist to keep track of all your favorite coins. Learn the markets and never miss a beat by staying up to date with top news</Typography>

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

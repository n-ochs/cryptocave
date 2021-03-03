import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Grow, Typography, Paper } from '@material-ui/core'
import useWindowPosition from '../hooks/useWindowPosition'
import ScrollButton from './ScrollButton'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        alignItems: 'flex-end'
    },
    titleWrapper: {
        marginRight: 'auto',
        textAlign: 'left',
        marginLeft: '2rem'

    },
    titleText: {
        color: '#fff',
        fontSize: '6.5rem',
    },
    contentText: {
        color: '#fff',
        fontSize: '1.5rem',
        marginLeft: '2rem'


    },
    down: {
        textAlign: 'center',
        margin: 'auto'
    }

}))

function Discover() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'research'


    return (

        <Grid container id="discover" className={classes.root}>
            <Grid item xs={12}></Grid>
            <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
                <Paper style={{ backgroundColor: 'transparent' }}>
                    <Grid item xs={4} className={classes.titleWrapper}>
                        <Typography variant='h3' className={classes.titleText}>Discover <br />New Coins</Typography>
                    </Grid>
                    <Grid item xs={4} checked={checked} className={classes.contentWrapper}>
                        <Typography variant='subtitle1' className={classes.contentText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, architecto voluptates esse tenetur recusandae voluptate quis reprehenderit, doloribus necessitatibus accusantium molestias perspiciatis. Nostrum aliquid saepe deserunt distinctio, nihil reiciendis beatae! </Typography>
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

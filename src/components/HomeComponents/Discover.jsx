import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Grow, Box, IconButton, Typography } from '@material-ui/core'
import CardFeature from './CardFeature'
import { content } from './content'
import useWindowPosition from '../hooks/useWindowPosition'
import ScrollButton from './ScrollButton'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        border: '3px solid red',
        justifyContent: 'space-between'

    },
    title: {
        color: '#fff',
        fontSize: '7.5rem',
        border: '3px solid red'

    },
    content: {
        border: '3px solid blue'
    }


}))

function Discover() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'research'


    return (

        <Grid container id="discover" className={classes.root}>
            <Grid item>
                <Typography variant='h3' className={classes.title}>Discover</Typography>
            </Grid>
            <Grid item id="discover-section" className={classes.content}>
                <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
                    <Grid item>
                        <CardFeature content={content[0]} checked={checked} />
                    </Grid>
                </Grow>
                <ScrollButton section={section} />
            </Grid>


        </Grid>
    )
}

export default Discover

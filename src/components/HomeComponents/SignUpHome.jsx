import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Grow, Typography, Paper, fade, Button, IconButton, Box } from '@material-ui/core'
import useWindowPosition from '../hooks/useWindowPosition'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleText: {
        color: '#fff',
        fontSize: '6.5rem',
        alignContent: 'center',
        padding: '6rem',

    },

    down: {
        textAlign: 'center',
        margin: 'auto',
        color: '#fff',
        fontSize: '5rem',
        transition: "transform 0.15s ease-in-out",
        color: fade('#fff', 1),
        '&:hover': {
            color: fade('#dd3835', 1),
            transform: "scale3d(1.2, 1.2, 1)"
        },


    },
    btn: {
        transition: "transform 0.15s ease-in-out",
        backgroundColor: fade('#dd3835', 0.7),
        '&:hover': {
            backgroundColor: fade('#dd3835', 0.9),
            transform: "scale3d(1.1, 1.1, 1)"
        },
        fontSize: '2.1rem',
        color: '#fff',
        padding: '1rem'

    },
    paper: {
        backgroundColor: 'transparent',
        textAlign: 'center',

    },

}))

function SignUpHome() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'header'


    return (

        <Grid container id="signup" className={classes.root}>

            <Grid item xs={12}></Grid>
            <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
                <Paper className={classes.paper}>
                    <Grid item xs={12} className={classes.titleWrapper}>
                        <Typography variant='h3' className={classes.titleText}>Get Started Today!</Typography>
                    </Grid>
                    <Grid item xs={12} checked={checked} className={classes.contentWrapper}>
                        <Button className={classes.btn} variant="filled" color="secondary" size="large" component={Link} to={'/signup'}>
                            Sign In
                        </Button>
                    </Grid>
                </Paper>
            </Grow>
            <Grid item xs={12} className={classes.down}>
                <Box>
                    <Scroll to={section} smooth={true}>
                        <IconButton >
                            <ExpandLessIcon className={classes.down} />
                        </IconButton>
                    </Scroll>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUpHome

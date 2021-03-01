import React, { useState, useEffect } from 'react'
import bitcoin from '../../videos/bitcoin.mp4'
import { makeStyles, Box, Button, Typography, fade, IconButton, Collapse, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import ScrollButton from './ScrollButton'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100vh',
    },
    videoTag: {
        minHeight: '100vh',
        width: '100vw',
        objectFit: 'cover',
        position: 'fixed',
        zIndex: -1,
    },
    title: {
        color: '#fff',
        fontSize: '7.5rem',
        textAlign: 'center',

    },

    down: {
        textAlign: 'center',
        margin: 'auto',
    }
}))

const Hero = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    const section = 'discover'

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Grid container className={classes.wrapper} id="header">
            <video autoPlay loop muted className={classes.videoTag}>
                <source src={bitcoin} type='video/mp4' />
            </video>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={0}>
                <Grid item xs={12}>
                    <Typography variant='h2' className={classes.title}>
                        <Box fontWeight="fontWeightBold">
                            Welcome to <br /> The Crypto Cave
                        </Box>
                    </Typography>
                </Grid>

            </Collapse>
            <Grid item xs={12} className={classes.down}>
                <ScrollButton section={section} />
            </Grid>
        </Grid>
    )
}

export default Hero

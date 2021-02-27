import React, { useState, useEffect } from 'react'
import bitcoin from '../videos/bitcoin.mp4'
import { makeStyles, Box, Button, Typography, fade, IconButton, Collapse } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: '4.5rem',
        textAlign: 'center'

    },
    btn: {

        transition: "transform 0.15s ease-in-out",
        backgroundColor: fade(theme.palette.common.white, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.4),
            transform: "scale3d(1.2, 1.2, 1)"
        },
        fontWeight: 'bold'

    },
    down: {
        color: '#fff',
        fontSize: '4rem',
    }
}))

const Hero = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <div className={classes.wrapper}>
            <video autoPlay loop muted className={classes.videoTag}>
                <source src={bitcoin} type='video/mp4' />
            </video>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={0}>
                <Typography variant='h2' className={classes.title}>
                    <Box fontWeight="fontWeightBold">
                        Welcome to <br /> The Crypto Cave
                </Box>
                    <Box>
                        <Button className={classes.btn} variant="outlined" color="secondary" size="large" component={Link} to={'/signup'}>
                            Sign Up
                    </Button>
                    </Box>
                    <Box>
                        <IconButton >
                            <ExpandMoreIcon className={classes.down} />
                        </IconButton>
                    </Box>
                </Typography>
            </Collapse>

        </div>
    )
}

export default Hero

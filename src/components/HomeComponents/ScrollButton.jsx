import React, { useState, useEffect } from 'react'
import bitcoin from '../../videos/bitcoin.mp4'
import { makeStyles, Box, Button, Typography, fade, IconButton, Collapse } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles(theme => ({

    down: {
        color: '#fff',
        fontSize: '5rem',
        transition: "transform 0.15s ease-in-out",
        color: fade('#fff', 1),
        '&:hover': {
            color: fade(theme.palette.primary.accent, 1),
            transform: "scale3d(1.4, 1.4, 1)"
        },

    }
}))

const Hero = ({ section }) => {
    const classes = useStyles()

    return (
        <Box>
            <Scroll to={section} smooth={true}>
                <IconButton >
                    <ExpandMoreIcon className={classes.down} />
                </IconButton>
            </Scroll>
        </Box>

    )
}

export default Hero

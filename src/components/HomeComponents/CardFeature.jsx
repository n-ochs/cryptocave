import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse, Paper, Grow } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        background: 'rgba(100,100,100,0.5)',
        margin: 'auto'
    },
    media: {
        height: 400
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff'
    },
    desc: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: '#fff'
    }
});

export default function CardFeature({ content, checked }) {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {content.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                {content.desc}
            </Typography>
        </Paper>

    )
}

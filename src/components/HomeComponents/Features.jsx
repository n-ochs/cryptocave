import React from 'react'
import { makeStyles } from '@material-ui/core'
import CardFeature from './CardFeature'
import { content } from './content'
import useWindowPosition from '../hooks/useWindowPosition'



const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    }

}))
function Features() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    return (
        <div className={classes.root} id="features-section">
            <CardFeature content={content[0]} checked={checked} />
            <CardFeature content={content[1]} checked={checked} />

        </div>
    )
}

export default Features

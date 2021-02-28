import React from 'react'
import { makeStyles, Grid, Grow } from '@material-ui/core'
import CardFeature from './CardFeature'
import { content } from './content'
import useWindowPosition from '../hooks/useWindowPosition'
import ScrollButton from './ScrollButton'




const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row'
        }
    }

}))
function Research() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'expand'



    return (
        <div className={classes.wrapper} id="research">

            <Grid container className={classes.root} id="research-section">
                <h1 style={{ color: 'white' }}>research</h1>
                <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
                    <Grid item xs={6}>
                        <CardFeature content={content[0]} checked={checked} />
                    </Grid>
                </Grow>
                <Grow in={checked} {...(checked ? { timeout: 4000 } : {})}>
                    <Grid item xs={6}>
                        <CardFeature content={content[1]} checked={checked} />
                    </Grid>
                </Grow>
                <ScrollButton section={section} />

            </Grid>
        </div>
    )
}

export default Research

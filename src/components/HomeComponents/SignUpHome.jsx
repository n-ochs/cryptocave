import React from 'react'
import { makeStyles, Grid, Grow, Box, IconButton } from '@material-ui/core'
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
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },

}))
function SignUpHome() {
    const classes = useStyles()

    const checked = useWindowPosition('header')

    const section = 'header'


    return (

        <div className={classes.wrapper} id="signup">
            <h1 style={{ color: 'white' }}>signup</h1>

            <Grid container className={classes.root} id="signup-section">
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

export default SignUpHome

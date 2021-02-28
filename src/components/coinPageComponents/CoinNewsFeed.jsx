import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paper, makeStyles, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },

    title: {
        fontSize: 20,
        textAlign: 'left',
        paddingBottom: '1.5rem',
        color: theme.palette.secondary.accent,
        fontWeight: 'bold'
    },


}))

const CoinNewsFeed = ({ coin }) => {

    const [newsFeed, setNewsFeed] = useState(null)
    const classes = useStyles()

    useEffect(async () => {
        const data = await axios.get(`/posts/?auth_token=e0a27bc786203eea879f983882f4b94dde4c690a&currencies=${coin.symbol}`)
        setNewsFeed(data.data.results)
    }, [])

    return (
        <Paper style={{ maxHeight: 190, overflow: 'auto' }} className={classes.root}>
            {newsFeed && (
                <Box>
                    <Typography className={classes.title}>Feed</Typography>
                    {newsFeed.map((article) => (
                        <div>
                            <a href={`${article.url}`} style={{ textDecoration: 'none', color: 'inherit' }} key={article.id}>

                                {article.title}

                            </a>
                        </div>

                    ))}
                </Box>
            )}


        </Paper>
    )
}


export default CoinNewsFeed






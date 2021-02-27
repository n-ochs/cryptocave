import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from './newsPageComponents/NewsCard'
import { makeStyles, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(10),
        paddingLeft: theme.spacing(10)
    }
}))

const NewsList = () => {

    const classes = useStyles()
    const [newsTop, setNewsTop] = useState(null)

    useEffect(async () => {
        const res = await axios.get('http://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=c5277bbf8a444cbabab89db5e6b4fd47')
        await setNewsTop(res.data.articles)

    }, [])

    return (
        <div className={classes.root}>
            {newsTop && (
                <Grid container spacing={4} justify='center' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography variant='h3'>Top News</Typography>
                    </Grid>
                    {newsTop.map((article) => (
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <NewsCard article={article} />
                        </Grid>

                    ))}
                </Grid>
            )}



        </div>
    )
}


export default NewsList




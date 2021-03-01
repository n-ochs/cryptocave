import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function NewsCard({ article }) {
    console.log(article)
    const classes = useStyles()

    const [newsTop, setNewsTop] = useState(null)

    useEffect(async () => {
        const res = await axios.get('http://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=c5277bbf8a444cbabab89db5e6b4fd47')
        await setNewsTop(res.data.articles)

    }, [])

    return (

        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>

                {newsTop &&
                    (
                        newsTop.map((tile) => (
                            <GridListTile key={tile.urlToImage}>
                                <img src={tile.urlToImage} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${tile.title}`}>
                                            <StarBorderIcon className={classes.title} />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))
                    )
                }
            </GridList>
        </div>
    );
}

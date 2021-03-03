import React, { useState, useEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        transition: "transform 0.15s ease-in-out",

    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold'


    },
    tile: {
        opacity: 1,
        transition: "transform .4s ease-in-out",
        '&:hover': {
            transform: "scale3d(1, 1, 1)",
            opacity: .6,
            borderBottom: `5px solid ${theme.palette.secondary.accent}`,
            cursor: 'pointer',
        },



    },
    titleBar: {

        background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
        backgroundColor: fade('rgba(0, 0, 0, 1)'),

    },
}));

export default function NewsCard({ article }) {
    console.log(article)
    const classes = useStyles()

    const [newsTop, setNewsTop] = useState(null)

    useEffect(async () => {
        const res = await axios.get('https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=c5277bbf8a444cbabab89db5e6b4fd47')
        await setNewsTop(res.data.articles)

    }, [])

    return (

        <div className={classes.root}>
            <GridList className={classes.gridList}>

                {newsTop &&
                    (
                        newsTop.map((tile) => (
                            <GridListTile key={tile.urlToImage} className={classes.tile} onClick={() => window.open(`${tile.url}`)}>
                                <img src={tile.urlToImage ? tile.urlToImage : process.env.PUBLIC_URL + '/coins.jpg'} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${tile.title}`}>
                                            <MenuBookIcon fontSize='large' className={classes.title} />
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

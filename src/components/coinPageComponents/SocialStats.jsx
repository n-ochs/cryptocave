import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core'

function SocialStats({ coin }) {
    return (
        <Grid container style={{ textAlign: 'center' }} direction='row' spacing={1} justify='space-between'>
            <Grid item xs={3}>
                <Typography>
                    <Box fontWeight='fontWeightLight'>Community Score</Box>
                    <Box fontWeight='bold'>{coin.community_score}</Box>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>
                    <Box fontWeight='fontWeightLight'>Reddit Subscribers</Box>
                    <Box fontWeight='bold'>{coin.community_data.reddit_subscribers}</Box>
                </Typography>
            </Grid>
            <Grid item xs={3}>

                <Typography>
                    <Box fontWeight='fontWeightLight'>Reddit Avg Posts (48h)</Box>
                    <Box fontWeight='bold'>{coin.community_data.reddit_average_posts_48h}</Box>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>
                    <Box fontWeight='fontWeightLight'>Reddit Average Comments (48h)</Box>
                    <Box fontWeight='bold'>{coin.community_data.reddit_average_comments_48h}</Box>
                </Typography>
            </Grid>

        </Grid>


    )
}

export default SocialStats

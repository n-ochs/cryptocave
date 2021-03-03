
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, CardHeader, Avatar, Icon, CardMedia, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        border: `4px solid ${theme.palette.secondary.accent}`,
        margin: '.5rem'
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },

}));
function WatchlistCard(props) {

    const classes = useStyles();
    const { watchlist } = props;



    return (

        <Grid container>
            {watchlist.map((coin) => {

                return (
                    <Grid item key={coin.data.symbol}>
                        <Card className={classes.root} variant="outlined" >
                            <CardHeader
                                className={classes.title}
                                avatar={
                                    <Avatar
                                        src={coin.data.image.thumb}
                                    />

                                }
                                title={coin.data.id.toUpperCase()}
                                subheader={coin.data.symbol.toUpperCase()}
                                classes={{
                                    title: classes.headerTitle,
                                    subHhader: classes.headerSubheader,
                                }}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    <Box>Current Price: ${coin.data.market_data.current_price.usd}</Box>
                                    <Box>Price Change 24h: ${coin.data.market_data.price_change_24h_in_currency.usd}</Box>
                                    <Box>High 24h: ${coin.data.market_data.high_24h.usd}</Box>
                                    <Box>Low 24h ${coin.data.market_data.low_24h.usd}</Box>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={`/coins/${coin.data.id}`} size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );

};

export default WatchlistCard;



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
        border: `4px solid ${theme.palette.secondary.accent}`,
        margin: '.5rem',
        justifyContent: 'center',
        alignItems: 'center'
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
    const { portfolio } = props;



    return (

        <Grid container>
            {portfolio.map((coin) => {

                return (
                    <Grid container xs={3} key={coin.coin} className={classes.root}>
                        <Grid item style={{ background: "white", textAlign: "center" }}>
                            <Typography variant="body2" component="p" style={{ fontSize: "200%", fontWeight: "bold", color: '#fff', backgroundColor: '#12151f' }}>
                                {coin.quantity} {coin.coin}
                            </Typography>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    );

};

export default WatchlistCard;


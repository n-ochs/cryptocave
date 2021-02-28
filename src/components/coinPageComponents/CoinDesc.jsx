import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Paper, Box, Button } from '@material-ui/core';

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

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        color: theme.palette.secondary.accent
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}))

function CoinDesc({ coin }) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.root} style={{ maxHeight: 190, overflow: 'auto' }}>
            <CardContent>
                <Typography className={classes.title}>
                    About
            </Typography>

                <Typography variant="body2" component="p">
                    <Box>
                        {coin.description.en.split('.')[0]} {coin.description.en.split('.')[1]}
                    </Box>
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {coin.description.en}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CoinDesc

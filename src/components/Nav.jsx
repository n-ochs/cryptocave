import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Link, CssBaseline
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom';
import SearchCoins from './SearchCoins'
import SortIcon from '@material-ui/icons/Sort';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    appBar: {
        background: 'none',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
    },
    appBarShift: {

        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {

        marginRight: theme.spacing(2),
    },
    hide: {

        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {

        width: drawerWidth,
    },
    drawerHeader: {

        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
    },
    content: {

        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },


}));

const Nav = (props) => {
    const { history } = props
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const listItemsCoins = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => {
                history.push('/')
                handleDrawerClose()
            }
        }, {
            text: 'Cryptocurrencies',
            icon: <MonetizationOnIcon />,
            onClick: () => {
                history.push('/coinlist')
                handleDrawerClose()
            }
        },
        {
            text: 'Top News',
            icon: <MenuBookIcon />,
            onClick: () => {
                history.push('/newslist')
                handleDrawerClose()
            }
        }
    ]
    const listItemsAccount = [

        {
            text: 'Watchlist',
            icon: <VisibilityIcon />,
            onClick: () => {
                history.push('/watchlist')
                handleDrawerClose()
            }

        }, {
            text: 'Portfolio',
            icon: <BusinessCenterIcon />,
            onClick: () => {
                history.push('/portfolio')
                handleDrawerClose()
            }
        },
        {
            text: 'Profile',
            icon: <AccountCircleIcon />,
            onClick: () => {
                history.push('/profile')
                handleDrawerClose()
            }
        }
    ]

    return (

        <div className={classes.root}>
            <AppBar
                elevation={0}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <SortIcon fontSize='large' />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Crypto Cave
                    </Typography>

                    <SearchCoins />

                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {listItemsCoins.map((item, index) => {
                        const { text, icon, onClick } = item
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>)

                    })}
                </List>
                <Divider />
                <List>
                    {listItemsAccount.map((item, index) => {
                        const { text, icon, onClick } = item
                        return (

                            <ListItem button key={text} onClick={onClick}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>

                        )

                    })}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
        </div>
    );
}


export default withRouter(Nav)
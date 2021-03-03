import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Avatar, Button, Grid, Paper, TextField, Typography, makeStyles } from '@material-ui/core';
import { updatePortfolio } from '../components/methods/BackendConnection/Portfolio';
import PortfolioCard from '../components/PortfolioCard';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        width: '100vw',
        paddingTop: '8.5rem',
        display: 'flex',

    },
    wrapper: {
        justifyContent: 'center',
        width: '85%',

    },

}))

const Portfolio = () => {

    const classes = useStyles();

    const [ values, setValues ] = useState({
        quantity: '',
        newCoin: '',
    });

    const [portfolio, setPortfolio] = useState([]);
    useEffect(async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/p/portfolio`)
        .then((res) => {
            console.log(res.data)
            setPortfolio(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [values]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { newCoin, quantity } = values;
        updatePortfolio(newCoin, parseFloat(quantity))
        .then(() => setValues({quantity: '', newCoin: ''}))
        .catch(err => console.log(err))
        
    };

    return (

        <Grid container justify='center' className={classes.root}>


            {/* Title */}
            <Typography variant='h2' style={{ 'font-weight': 'bold', fontSize: '5rem', color: '#fff' }}>Portfolio</Typography>
            
            {/* Update Coin Form */}
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <TextField label='Quantity' placeholder='Quantity' id='quantity' type='number' name='quantity' value={values.quantity} onChange={handleChange} style={{border: "solid #36d9df"}} />
                <TextField label='Coin' placeholder='Coin' id='newCoin' type='string' name='newCoin' value={values.newCoin} onChange={handleChange} />
                <Button type='submit' color='primary' variant='contained' onClick={handleSubmit}>Update Coin</Button>
            </Grid>
            {/* Mapping Portfolio */}
            <Grid container className={classes.wrapper} style={{justifyContent: "center"}}>
                <PortfolioCard portfolio={portfolio} />
            </Grid>
        </Grid>
    );
};

export default Portfolio;
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { updatePortfolio } from '../components/methods/BackendConnection/Portfolio';

const Portfolio = () => {

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
    }, [portfolio]);

    const [ values, setValues ] = useState({
        quantity: '',
        newCoin: '',
    });

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
        <div>

            {portfolio && portfolio.map((coin) => {
                return <h1 key={coin.coin}>{coin.quantity} {coin.coin}</h1>
            })}

            <TextField label='Quantity' placeholder='Quantity' id='quantity' type='number' name='quantity' value={values.quantity} onChange={handleChange} />

            <TextField label='Coin' placeholder='Coin' id='newCoin' type='string' name='newCoin' value={values.newCoin} onChange={handleChange} />

            <Button type='submit' color='primary' variant='contained' onClick={handleSubmit}>Update Coin</Button>
            

        </div>
    );
};

export default Portfolio;
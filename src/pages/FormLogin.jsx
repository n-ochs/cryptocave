import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../components/methods/BackendConnection/Auth';

const FormLogin = () => {

    const [ values, setValues ] = useState({
        email: '',
        password: '',
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
        const { email, password } = values;
        login(email, password);
    };

    const paperStyle={padding: 60, height: '30vh', width: 500, margin: 'auto auto', border: "5px solid #05f4b7"};
    const avatarStyle={backgroundColor: 'grey'};
    const buttonStyle={margin: '10px 0'};
    const theme={backgroundColor: '#12151f', height: '100vh'};

    return (
            <Grid style={theme} container>
                <Paper elevation={10} style={paperStyle} spacing={0} justify='center'>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <Typography>Sign In</Typography>
                    </Grid>
                    <TextField fullWidth required label='Email' placeholder='Email' id='email' type='email' name='email' value={values.email} onChange={handleChange} />
                    <TextField fullWidth required label='Password' placeholder='Password' id='password' type='password' name='password' value={values.password} onChange={handleChange} />
                    <Button fullWidth type='submit' color='primary' variant='contained' onClick={handleSubmit} style={buttonStyle}>Sign In</Button>
                    <Typography>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </Typography>
                </Paper>
            </Grid>
    );
};

export default FormLogin;
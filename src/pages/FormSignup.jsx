import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Avatar, TextField, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useForm from '../components/useForm';
import validate from '../components/methods/ValidateInfo';

const FormSignUp = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    const paperStyle={padding: 60, height: 'auto', width: 500, margin: 'auto auto', border: "5px solid #05f4b7"};
    const avatarStyle={backgroundColor: 'grey'};
    const buttonStyle={margin: '10px 0'};
    const theme={backgroundColor: '#12151f', height: '100vh'};

    return (
        <Grid style={theme} container>
            <Paper elevation={10} style={paperStyle} spacing={0} justify='center'>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonOutlineIcon /></Avatar>

                    <Typography>Register</Typography>
                    
                    <TextField fullWidth required label='Username' placeholder='Username' id='username' type='text' name='username' value={values.username} onChange={handleChange} />
                    <Typography>{errors.username && <p>{errors.username}</p>}</Typography>

                    <TextField fullWidth required label='Email' placeholder='Email' id='email' type='email' name='email' value={values.email} onChange={handleChange} />
                    <Typography>{errors.email && <p>{errors.email}</p>}</Typography>

                    <TextField fullWidth required label='Password' placeholder='Password' id='password' type='password' name='password' value={values.password} onChange={handleChange} />
                    <Typography>{errors.password && <p>{errors.password}</p>}</Typography>

                    <TextField fullWidth required label='Confirm your password' placeholder='Password' id='password2' type='password' name='password2' value={values.password2} onChange={handleChange} />
                    <Typography>{errors.password2 && <p>{errors.password2}</p>}</Typography>

                    <Button fullWidth type='submit' color='primary' variant='contained' onClick={handleSubmit} style={buttonStyle}>Sign Up</Button>

                    <Typography>
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default FormSignUp;
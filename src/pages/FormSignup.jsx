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

        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <h1>Get started with us today! Create your account by filling out the information below.</h1>

        //         {/* Username Field */}
        //         <div>
        //             <label htmlFor="username">
        //                 Username
        //             </label>
        //             <input 
        //                 id="username"
        //                 type="text" 
        //                 name="username" 
        //                 placeholder="Enter your username"
        //                 value={values.username}
        //                 onChange={handleChange}>
        //                 </input>
        //                 {errors.username && <p>{errors.username}</p>}
        //         </div>

        //         {/* Email Field */}
        //         <div>
        //             <label htmlFor="email">
        //                 Email
        //             </label>
        //             <input 
        //                 id="email"
        //                 type="email" 
        //                 name="email" 
        //                 placeholder="Enter your email"
        //                 value={values.email}
        //                 onChange={handleChange}>
        //                 </input>
        //                 {errors.email && <p>{errors.email}</p>}
        //         </div>

        //         {/* Password Field */}
        //         <div>
        //             <label htmlFor="password">
        //                 Password
        //             </label>
        //             <input 
        //                 id="password"
        //                 type="password" 
        //                 name="password" 
        //                 placeholder="Enter your password"
        //                 value={values.password}
        //                 onChange={handleChange}>
        //                 </input>
        //                 {errors.password && <p>{errors.password}</p>}
        //         </div>

        //         {/* Password Confirmation Field */}
        //         <div>
        //             <label htmlFor="password2">
        //                 Confirm Your Password
        //             </label>
        //             <input 
        //                 id="password2"
        //                 type="password" 
        //                 name="password2" 
        //                 placeholder="Enter your password"
        //                 value={values.password2}
        //                 onChange={handleChange}>
        //                 </input>
        //                 {errors.password2 && <p>{errors.password2}</p>}
        //         </div>

        //         <button
        //         type="submit">
        //             Sign Up
        //         </button>

        //         <span>
        //             Already have an account? <Link to="/login">Log In Here</Link>
        //         </span>
        //     </form>
        // </div>
    );
};

export default FormSignUp;
import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function FormSuccess() {

    const theme={backgroundColor: '#12151f', height: '100vh'};
    const paperStyle={padding: 60, height: 'auto', width: 500, margin: 'auto auto', border: "5px solid #05f4b7"};
    const avatarStyle={backgroundColor: 'grey'};

    return (
        <Grid style={theme} container>
            <Paper elevation={10} style={paperStyle} spacing={0}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><CheckCircleOutlineIcon /></Avatar>
                    <Typography>Thank you for signing up to Crypto Cave!</Typography>
                    <Typography>Redirecting you home...</Typography>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default FormSuccess;
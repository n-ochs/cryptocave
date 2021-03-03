import axios from 'axios';
import { setAuthenticationToken } from '../Tokens';
const appUrl = "https://cryptocave.netlify.app";

//Signup
export const createUser = async (username, email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/signup`, {
        username: username,
        email: email,
        password: password
    })
        .then(() => {
            setTimeout(() => {
                window.location.href = appUrl;
            }, 1000);
        })
        .catch(() => {
            window.location.href = `${appUrl}/SignUp`;
            alert('Account registration failed. Please try again.');
        });
};

//Login
export const login = async (email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/login`, {
        email: email,
        password: password
    })
        .then((res) => {
            if (res.data.token) {
                setAuthenticationToken(res.data.token);
                window.location.href = appUrl; //change back to appUrl
            };
        })
        .catch((err) => {
            window.location.href = `${appUrl}/login`;
            alert('Your username or password was incorrect. Please try logging in again.');
        });
};

//Email Verification
export const verification = async (email, verificationCode) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/activate`, {
        email: email,
        verificationCode: verificationCode
    });
    //add .then and .catch
};

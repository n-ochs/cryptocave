import axios from 'axios';

export const createUser = async (username, email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/signup`, {
        username: username,
        email: email,
        password: password
    })
    // .then(() => {
    //     alert('success')
    // })
    // .catch(() => {
    //     window.location.href = "https://cryptocave.netlify.app/SignUp";
    //     alert('someting wong')
    // })
};

export const login = async (email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/login`, {
        email: email,
        password: password
    });
};

export const verification = async (email, verificationCode) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/activate`, {
        email: email,
        verificationCode: verificationCode
    });
};
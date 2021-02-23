import axios from 'axios';

export const createUser = async (username, email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/signup`, {
        username: username,
        email: email,
        password: password
    });
};

export const login = async (email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/login`, {
        email: email,
        password: password
    });
};
import axios from 'axios';

export const createUser = async (email, password) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/signup`, {
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
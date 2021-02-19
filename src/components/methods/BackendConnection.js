import axios from 'axios';
require('dotenv').config();

export const createUser = async (email, password) => {
    await axios.post(`${process.env.BACKEND_CONNECTION}/signup`, {
        email: email,
        password: password
    });
};

export const login = async (email, password) => {
    await axios.post(`${process.env.BACKEND_CONNECTION}/login`, {
        email: email,
        password: password
    });
};
import axios from 'axios';
require('dotenv').config();

const createUser = async (email, password) => {
    await axios.post(`${process.env.BACKEND_CONNECTION}/signup`, {
        email: email,
        password: password
    });
};

const login = async (email, password) => {
    await axios.post(`${process.env.BACKEND_CONNECTION}/login`, {
        email: email,
        password: password
    });
};

module.exports = {
    createUser,
    login
};
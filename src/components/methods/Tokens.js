import axios from 'axios';
import Cookies from 'js-cookie';

export const setAuthenticationToken = (token) => {
    if (token) {
        Cookies.set('jsonwebtoken', token, {expires: 1/24});
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    };
};
export const removeAuthenticationToken = () => {
    Cookies.remove('jsonwebtoken');
    delete axios.defaults.headers.common['Authorization'];
};

//on login, if login response contains token, setAuthenticationToken
//on logout, run removeAuthentificationToken
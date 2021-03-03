import axios from 'axios';
import Cookies from 'js-cookie';

export const setAuthenticationToken = (token) => {
    if (token) {
        Cookies.set('crypto-auth-token', token, {expires: 1/24});
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    };
};
export const removeAuthenticationToken = () => {
    Cookies.remove('crypto-auth-token');
    delete axios.defaults.headers.common['Authorization'];
};

export const checkForCookie = () => {
    let foundCookie = Cookies.get('crypto-auth-token');
    if(foundCookie) {
        axios.defaults.headers.common['Authorization'] = foundCookie;
    };
};

//on login, if login response contains token, setAuthenticationToken
//on logout, run removeAuthentificationToken
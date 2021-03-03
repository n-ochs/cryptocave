import axios from 'axios';

const appUrl = "https://cryptocave.netlify.app";

//Create
export const createPortfolio = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/p/create`)
        .then(() => {
            console.log('watchlist created')
        })
        .catch(() => {
            console.log('unable to create')
        });
};

//Read - function does not work when used in another file.
// export const getPortfolio = async () => {
//     await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/p/portfolio`)
//         .then((result) => {
//             return result.data
//         })
//         .catch(() => {
//             console.log('error receiving watchlist')
//         });
// };

//Update
export const updatePortfolio = async (newCoin, quantity) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/p/add`, {
        newCoin: newCoin,
        quantity: quantity
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
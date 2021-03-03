import axios from 'axios';

const appUrl = "https://cryptocave.netlify.app";

//Create
export const createWatchlist = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/create`)
        .then(() => {
            console.log('watchlist created')
        })
        .catch(() => {
            console.log('unable to create')
        });
};

//Read - function does not work when used in another file.
// export const getWatchlist = async () => {
//     await axios.get(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/watchlist`)
//         .then((result) => {
//             return result.data
//         })
//         .catch(() => {
//             console.log('error receiving watchlist')
//         });
// };

//Update
export const addToWatchlist = async (coin) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/add`, {
        newCoin: coin
    });
};

//Delete
export const deleteFromWatchlist = async (coin) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_CONNECTION}/wl/delete`, {
        deletedCoin: coin
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
export const Data = {

    async getCoins(endpoint) {
        const url = `https://api.coingecko.com/api/v3/${endpoint}`
        const data = await fetch(url)
        const json = await data.json()
        return json
    },

    async getNews() {}
}
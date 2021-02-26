import React, { useEffect, useState } from 'react'
import axios from 'axios'


const CoinNewsFeed = ({ coin }) => {

    const [newsFeed, setNewsFeed] = useState(null)


    useEffect(async () => {
        const data = await axios.get(`/posts/?auth_token=e0a27bc786203eea879f983882f4b94dde4c690a&currencies=${coin.symbol}`)
        setNewsFeed(data.data.results)
    }, [])

    return (
        <div>
            {newsFeed && (
                <ul>
                    <h1>News Feed</h1>
                    {newsFeed.map((article) => (
                        <div>
                            <a href={`${article.url}`}>
                                <li key={article.id}>
                                    {article.title}
                                </li>
                            </a>
                        </div>

                    ))}
                </ul>
            )}


        </div>
    )
}


export default CoinNewsFeed






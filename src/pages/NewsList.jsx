import React, { useEffect, useState } from 'react'
import axios from 'axios'


const NewsList = ({ match }) => {

    const [newsTop, setNewsTop] = useState(null)


    useEffect(async () => {
        const res = await axios.get('http://newsapi.org/v2/everything?q=crypto&from=2021-01-23&sortBy=publishedAt&apiKey=c5277bbf8a444cbabab89db5e6b4fd47')
        setNewsTop(res.data.articles)
    }, [])

    return (
        <div>
            {newsTop && (
                <ul>
                    <h1>Top News Articles</h1>
                    {newsTop.map((article) => (
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

            <ul>


            </ul>

        </div>
    )
}


export default NewsList




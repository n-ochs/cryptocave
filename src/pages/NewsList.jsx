import React, { useEffect, useState } from 'react'
import axios from 'axios'


const NewsList = () => {

    const [newsTop, setNewsTop] = useState(null)

    useEffect(async () => {
        const res = await axios.get('http://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=c5277bbf8a444cbabab89db5e6b4fd47')
        await setNewsTop(res.data.articles)

    }, [])

    return (
        <div>
            {newsTop && (
                <ul>
                    <h1>Top News Articles</h1>
                    {newsTop.map((article) => (
                        <div key={'hello'}>
                            <a href={`${article.url}`} >
                                <li >
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


export default NewsList




import React, { useEffect, useState } from 'react'


const NewsList = ({ match }) => {

    const [newsFeed, setNewsFeed] = useState(null)
    const [newsTop, setNewsTop] = useState(null)


    useEffect(async () => {
        const data = await fetch('/posts/?auth_token=e0a27bc786203eea879f983882f4b94dde4c690a&kind=news')
        const res = await data.json()
        setNewsFeed(res.results)
    }, [])

    useEffect(async () => {
        const data = await fetch('http://newsapi.org/v2/everything?q=crypto&from=2021-01-23&sortBy=publishedAt&apiKey=c5277bbf8a444cbabab89db5e6b4fd47')
        const res = await data.json()
        setNewsTop(res.articles)
        console.log(res.articles)
    }, [])

    return (
        <div>
            {newsFeed && (
                <ul>
                    <h1>news feed</h1>
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

            <ul>
                <h1>Top News Articles</h1>

            </ul>

        </div>
    )
}


export default NewsList




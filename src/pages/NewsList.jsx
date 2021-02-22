import React, { useEffect, useState } from 'react'
import { Data } from '../components/methods/DataAPIs'
import { Link } from 'react-router-dom'


const NewsList = ({ match }) => {

    const [news, setNews] = useState(null)

    useEffect(async () => {
        const data = await fetch('/posts/?auth_token=e0a27bc786203eea879f983882f4b94dde4c690a&kind=news')
        const res = await data.json()
        setNews(res.results)
        console.log(res)
    }, [])

    return (
        <div>
            {news && (
                <ul>
                    {news.map((article) => (
                        <div>
                            <a href={`${article.url}`}>
                                <li key={article.id}>
                                    {article.title}
                                </li>
                            </a>
                        </div>

                    ))}
                </ul>
            )
            }
        </div>
    )
}


export default NewsList




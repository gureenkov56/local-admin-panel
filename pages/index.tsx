import style from '@styles/index.module.scss'
import {useEffect, useState} from "react";

export default function Home() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                console.log('data', data);
            })
            .catch((err) => {
                setErr(true)
                console.error('Error', err);
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    if (err) return <p>Error</p>

    return (
            <main className={style.postList}>
                {data.posts.length ?
                <ul>
                    {data.posts.map(({id, h1, views}) => (
                        <li key={id}>
                            <a href={'post/' + id}>
                                <p>ID: {id}</p>
                                <h3>{h1}</h3>
                                <p>Просмотров: {views}</p>
                            </a>
                        </li>
                    ))}
                </ul>
                : <h2>NO POSTS</h2>}
            </main>

    );
}


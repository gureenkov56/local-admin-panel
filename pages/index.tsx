import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useEffect, useState} from "react";

export default function Home() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                console.log('data', data);
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div>
                <ul>
                    {data.posts.map(post => (
                        <li key={post.id}>{post.h1}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}


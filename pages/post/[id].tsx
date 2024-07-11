import { useRouter } from 'next/router'

import {useEffect, useState} from "react";
import {Post} from "@types/db";

export default function Post() {
    const {id} = useRouter().query
    const [post, setPost] = useState<Post>(null)
    const [isLoading, setLoading] = useState(true)
    console.log('router', id);

    useEffect(() => {
        if(!id) {
            return;
        }
        fetch(`/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.post)
                setLoading(false)
                console.log('data.post', data.post);
            })
    }, [id])

    if (isLoading) return <p>Loading...</p>
    if (!post) return <p>No profile data</p>

    return (
        <main>
            <a href="/">BACK</a>
            <p>Post ID: {id}</p>
            <h1>{post.h1}</h1>
            <p>Description: {post.description}</p>
            <p>Likes: {post.likes}</p>
        </main>
    )
}

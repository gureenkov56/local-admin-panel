`use client`
import { useRouter } from 'next/router'

import {useEffect, useState} from "react";
import {Post} from "@types/db";
import style from '@styles/post.module.scss'
import {PostDBFields} from "@enums/postFormFields.enum";
import {fieldsConfigs} from "@configs/fieldsConfig";

export default function Page() {
    const {id} = useRouter().query
    const [post, setPost] = useState<Post>(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if(!id) {
            return;
        }
        fetch(`/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.post)
                setLoading(false)
                console.log('data', data);
            })
    }, [id])

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const body = {}
        Object.values(PostDBFields).forEach(value => {
            body[value] = formData.get(value)
        })

        console.log('body', body);

        fetch(`/api/post-update`, {
            method: 'POST',
            body
        })
            .then(res => res.json())
            .then(res => console.log('res', res))
    }

    function getFormInput(field: string, data: string | number) {
        return (
            <div key={field}>
                <label htmlFor={field}>{field}</label>
                <div>
                    <input
                        id={field}
                        name={field}
                        type="text"
                        defaultValue={data}
                    />
                </div>
            </div>
        )
    }

    function getFormTextarea(field: string, data: string | number) {
        return(
            <div key={field}>
                <label htmlFor={field}>{field}</label>
                <div>
                    <textarea

                        id={field}
                        name={field}
                        defaultValue={data}
                        rows="5"
                    />
                </div>
            </div>
        )
    }

    function getFormItems(postData: Post) {

        return Object.entries(fieldsConfigs)
            .map(([key, value]) => {

                    const data = postData[key]

                    switch(value.tag) {
                        case 'input':
                            return getFormInput(key, data);
                        case 'textarea':
                            return getFormTextarea(key, data);
                        default:
                            return (<p>No block for this tag</p>)
                    }
        })
    }

    if (isLoading) return <p>Loading...</p>
    if (!post) return <p>No profile data</p>

    return (
        <main className={style.post}>
            <a href="/">
                <button className={'button__blue'}>
                    К списку постов
                </button>
            </a>
            <p>Post ID: {id}</p>
            <form onSubmit={handleSubmit}>
                {getFormItems(post)}

                <img src={process.env.REACT_APP_BLOG + '/frontend/public/images/content/2/title-2.jpg'} width='200' alt="post-image"/>

                <button className={`button__green`} type="submit">
                    SAVE
                </button>
            </form>
        </main>
    )
}

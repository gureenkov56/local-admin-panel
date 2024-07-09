import type { NextApiRequest, NextApiResponse } from 'next'
import connection from "../../utilites/mysql";

export type Post = {
    id: number,
    SEO_title: string
    SEO_description: string
    description: string
    h1: string
    pre_text: string,
    post_content: string
    pub_status: string
    category: number,
    preview_img: string
    views: number,
    likes: number,
    pub_date: string
}

type ResponseData = {
    posts?: Post[]
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const result = await getPosts()
        res.status(200).json({ posts: result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

// A simple SELECT query
// try {
//     const [results, fields] = await connection.query(
//         'SELECT * FROM `posts`'
//     );
//
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
// }

async function getPosts(){
    try {
        const [results, fields] = await connection.query<Post[]>(
            'SELECT * FROM `posts`'
        );

        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
        return results
    } catch (err) {
        console.log('err', err);
        throw(err)
    }
}

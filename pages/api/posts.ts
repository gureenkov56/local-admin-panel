import type { NextApiRequest, NextApiResponse } from 'next'
import {getPosts} from "@utilities/query/post";
import {Post} from "@types/db";

type PostsResponseData = {
    posts?: Post[]
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostsResponseData>
) {
    try {
        const result = await getPosts()
        res.status(200).json({ posts: result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}



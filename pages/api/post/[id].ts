import type { NextApiRequest, NextApiResponse } from 'next'
import {Post} from "@types/db";
import {getPostById} from "@utilities/query/post";

type PostResponseData = {
    post?: Post
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostResponseData>
) {
    try {
        const {id } = req.query
        const result = await getPostById(+id)
        res.status(200).json({ post: result[0] })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}



import connection from "@utilities/mysql";
import {Post} from "@types/db";

export async function getPosts(){
    try {
        const [results] = await connection.query<Post[]>(
            'SELECT * FROM `posts`'
        );
        return results
    } catch (err) {
        console.log('err', err);
        throw(err)
    }
}

export async function getPostById(id: number){
    try {
        const [result] = await connection.query<Post>(`SELECT * FROM posts WHERE id=${id} LIMIT 1`)
        return result
    } catch (err) {
        console.log('err', err);
        throw err
    }
}

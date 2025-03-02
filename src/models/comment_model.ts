import db from '../config/database'

export interface CommentBody {
    post_id: number;
    content: string;
    commenter_name: string,
}

interface QueryProps {
    post?: number;
    commenter_name?: string
}

const tableName: string = "comments"

export const getAllComments = (query: QueryProps) => {
    let queryBuilder = db(tableName);

    if (query.post) {
        queryBuilder = queryBuilder.where('post_id', query.post)
    }

    if (query.commenter_name) {
        queryBuilder = queryBuilder.where('commenter_name', 'like', `%${query.commenter_name}%`);
    }

    return queryBuilder
}

export const getCommentById = (id: number) => {
    return db(tableName).where({ id }).first();
}

export const createComment = (data: CommentBody) => {
    return db(tableName).insert(data).returning('*')
}

export const updateComment = (id: number, data: CommentBody) => {
    return db(tableName).where({ id }).update(data).returning('*')
}

export const deleteComment = (id: number) => {
    return db(tableName).where({ id }).del().returning('*');
};

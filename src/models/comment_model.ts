import db from '../config/database'

export interface CommentBody {
    post_id: number;
    content: string;
    commenter_name: string,
}
const tableName: string = "comments"

export const getAllComments = () => {
    return db(tableName);
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

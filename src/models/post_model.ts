import db from '../config/database'

export interface PostBody {
    title: string;
    content: string;
    category_id: number;
}

const tableName: string = "posts";

export const getAllPosts = () => {
    return db(tableName).whereNull('deleted_at');
}

export const getPostById = (id: number) => {
    return db(tableName).where({ id }).first();
}

export const createPost = (data: PostBody) => {
    return db(tableName).insert(data).returning('*')
}

export const updatePost = (id: number, data: PostBody) => {
    return db(tableName).where({ id }).update(data).returning('*')
}

export const deletePost = (id: number) => {
    return db(tableName).where({ id }).update({ deleted_at: new Date() }).returning('*')
}
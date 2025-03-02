import db from '../config/database'

export interface PostBody {
    title: string;
    content: string;
    category_id: number;
}

interface QueryProps {
    category?: string;
    status?: string;
    draft?: string;
    all?: string;
    showDeleted?: string;
    onlyDeleted?: string;
}

const tableName: string = "posts";

export const getAllPosts = async (query: QueryProps) => {
    let queryBuilder = db(tableName)

    if (query.category) {
        queryBuilder = queryBuilder.where('category_id', query.category);
    }

    if (query.status == "published") {
        queryBuilder = queryBuilder.whereNotNull('published_at')
    }
    else if (query.draft == "true") {
        queryBuilder = queryBuilder.whereNull('published_at')
    }
    else if (query.all == "true") {
        queryBuilder = queryBuilder;
    }

    // Deleted filtreleri
    if (query.showDeleted === 'true') {
        queryBuilder = queryBuilder;
    } else if (query.onlyDeleted === 'true') {
        queryBuilder = queryBuilder.whereNotNull('deleted_at');
    } else {
        queryBuilder = queryBuilder.whereNull('deleted_at');
    }

    return queryBuilder;
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
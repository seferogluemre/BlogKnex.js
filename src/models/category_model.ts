import db from '../config/database'

export interface CategoryBody {
    name: string;
}

export interface QueryProps {
    showDeleted?: string;
    onlyDeleted?: string;
}

export const getAllCategories = (query: QueryProps) => {

    let queryBuilder = db('categories');

    if (query.showDeleted) {
        queryBuilder = queryBuilder;
    } else if (query.onlyDeleted) {
        queryBuilder = queryBuilder.whereNotNull('deleted_at');
    } else {
        queryBuilder = queryBuilder.whereNull('deleted_at');
    }
    return queryBuilder;
}


export const getCategoryById = (id: number) => {
    return db('categories').where({ id }).first();
}

export const createCategory = (data: CategoryBody) => {
    return db('categories').insert(data).returning('*')
}

export const updateCategory = (id: number, data: CategoryBody) => {
    return db('categories').where({ id }).update(data).returning('*')
}

export const deleteCategory = (id: number) => {
    return db('categories').where({ id }).update({ deleted_at: new Date() }).returning('*')
}   
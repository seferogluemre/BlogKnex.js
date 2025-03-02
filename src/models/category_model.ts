import knex from 'knex';
import db from '../config/database'

export interface CategoryBody {
    name: string;
}

export const getAllCategories = () => {
    return db('categories').whereNull('deleted_at');
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
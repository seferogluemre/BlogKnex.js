import db from '../config/database'

export const getAllCategories = () => {
    return db('categories')
}       
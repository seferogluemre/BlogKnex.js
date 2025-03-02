import { Request, Response } from "express";
import { CategoryBody, createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "src/models/category_model";

export const listCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const getCategory = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
    try {
        const id = +req.params.id;
        const category = await getCategoryById(id)
        category ? res.status(200).json(category) : res.status(404).json({ message: "Kategori bulunamadı" })
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const addCategory = async (req: Request, res: Response) => {
    try {
        const addedCategory = await createCategory(req.body)
        addedCategory ? res.status(200).json(addedCategory) : res.status(404).json({ message: "Kategori oluşturulamadı" })
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const editCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedCategory = await updateCategory(Number(id), req.body)
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
        return;
    }
};

export const removeCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedCategory = await deleteCategory(Number(id))
        res.status(200).json(deletedCategory)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
        return;
    }
}
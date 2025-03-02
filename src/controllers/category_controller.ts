import { Request, Response } from "express";
import { getAllCategories } from "src/models/category_model";

export const listCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
    }
}
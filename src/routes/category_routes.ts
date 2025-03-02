import { Router } from "express";
import { addCategory, getCategory, listCategories, editCategory, removeCategory } from "src/controllers/category_controller";

const router = Router();

router.get('/', listCategories)
router.get('/:id', getCategory)
router.post('/', addCategory)
router.patch('/:id', editCategory)
router.delete('/:id', removeCategory)


export default router;  
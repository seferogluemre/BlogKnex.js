import { Router } from "express";
import { listCategories } from "src/controllers/category_controller";

const router = Router();

router.get('/', listCategories)




export default router;
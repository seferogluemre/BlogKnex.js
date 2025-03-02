import { Router } from "express";
import { addPost, getPost, listPosts } from "src/controllers/post_controller";

const router = Router();

router.get('/', listPosts)
router.get('/:id', getPost)
router.post('/', addPost)
// router.patch('/:id', editCategory)
// router.delete('/:id', removeCategory)


export default router;  
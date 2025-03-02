import { Router } from "express";
import { addPost, editPost, getPost, listPosts, removePost } from "src/controllers/post_controller";

const router = Router();

router.get('/', listPosts)
router.get('/:id', getPost)
router.post('/', addPost)
router.patch('/:id', editPost)
router.delete('/:id', removePost)


export default router;  
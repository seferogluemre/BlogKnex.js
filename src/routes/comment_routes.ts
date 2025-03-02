import { Router } from "express";
import { addComment, editComment, getComment, listComments, removeComment } from "src/controllers/comment_controller";


const router = Router();

router.get('/', listComments)
router.get('/:id', getComment)
router.post('/', addComment)
router.patch('/:id', editComment)
router.delete('/:id', removeComment)


export default router;  
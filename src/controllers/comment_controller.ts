import { Request, Response } from "express";
import { createComment, deleteComment, getAllComments, getCommentById, updateComment } from "src/models/comment_model";

export const listComments = async (req: Request, res: Response) => {
    try {
        const comments = await getAllComments();
        res.status(200).json(comments)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const getComment = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
    try {
        const id = +req.params.id;
        const comment = await getCommentById(id)
        comment ? res.status(200).json(comment) : res.status(404).json({ message: "Yorum bulunamadı" })
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const addComment = async (req: Request, res: Response) => {
    try {
        const addedComment = await createComment(req.body)
        addedComment ? res.status(200).json(addedComment) : res.status(404).json({ message: "Yorum oluşturulamadı" })
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const editComment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedComment = await updateComment(Number(id), req.body)
        res.status(200).json(updatedComment)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
        return;
    }
};

export const removeComment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedComment = await deleteComment(Number(id))
        res.status(200).json(deletedComment)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
        return;
    }
}
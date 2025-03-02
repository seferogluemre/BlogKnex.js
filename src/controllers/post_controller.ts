import { Request, Response } from "express";
import { createPost, deletePost, getAllPosts, getPostById, PostBody, updatePost } from "src/models/post_model";

export const listPosts = async (req: Request, res: Response) => {
    try {
        const posts = await getAllPosts(req.query);
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const getPost = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
    try {
        const { id } = req.params;
        const post = await getPostById(id);
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const addPost = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const createdPost = await createPost(body)
        res.status(200).json(createdPost)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
        return;
    }
}

export const editPost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedPost = await updatePost(Number(id), req.body)
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
        return;
    }
}

export const removePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedPost = await deletePost(Number(id))
        res.status(200).json(deletedPost)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
        return;
    }
}
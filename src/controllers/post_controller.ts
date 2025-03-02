import { Request, Response } from "express";
import { createPost, getAllPosts, getPostById, PostBody } from "src/models/post_model";

export const listPosts = async (req: Request, res: Response) => {
    try {
        const posts = await getAllPosts();
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
import Post from "../models/Post.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
}

export const getPost = async (req, res) => {
    const {id} = req.params
    try {
        const post  = await Post.findById(id)
        if(!post){
            return res.sendStatus(404)
        }
        return res.json(post)
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (req, res) => {
    try {
        const {title, description} = req.body
        const newPost = new Post({title, description})
        await newPost.save()
        return res.json(newPost)
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    try {
        
        const postUpdate = await Post.findByIdAndUpdate(id, req.body, {new: true})
        return res.json(postUpdate)
    } catch (error) {
        
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    try {
        const postDelete = await Post.findByIdAndDelete(id)
        if(!postDelete){
            return res.sendStatus(404)
        }
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}


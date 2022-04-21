
export const getPosts = (req, res) => {
    res.send({msg: 'Obteniendo post'})
}

export const getPost = (req, res) => {
    res.send({msg: 'Obteniendo un post'})
}

export const createPost = (req, res) => {
    res.send({msg: 'creando post'})
}

export const updatePost = (req, res) => {
    res.send({msg: 'actualizando post'})
}

export const deletePost = (req, res) => {
    res.send({msg: 'eliminando post'})
}


import api from './api-config'


export const getAllPosts = async () => {
    try {
        const res = await api.get('/posts')
        return res.data
    } catch (error) {
        throw error
    }
}

export const getOnePost = async (id) => {
    try {
        const res = await api.get(`/posts/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const createPost = async (postData) => {
    try {
        const res = await api.post('/posts', postData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const putPost = async (id, postData) => {
    try {
        const res = await api.get(`/posts/${id}`, postData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const deletePost = async (id) => {
    try {
        const res = await api.delete(`/posts/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
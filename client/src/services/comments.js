import api from './api-config'


export const createComment = async (post_id, commentData) => {
    try {
        const res = await api.post(`/posts/${post_id}/comments`, { comment: commentData })
        return res.data
    } catch (error) {
        throw error
    }
}

export const putComment = async (post_id, comment_id, commentData) => {
    try {
        const res = await api.put(`/posts/${post_id}/comments/${comment_id}`, { comment: commentData })
        return res.data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async (post_id, comment_id) => {
    try {
        const res = await api.delete(`/posts/${post_id}/comments/${comment_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
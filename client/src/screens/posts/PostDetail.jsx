import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import { getOnePost } from '../../services/posts'


export default function PostDetail({ currentUser, handlePostDelete, handleCommentDelete }) {
    const [post, setPost] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const postData = await getOnePost(id)
            setPost(postData)
        }
        fetchPost()
    },[id])

    return (
        <div>
            <PostCard
                currentUser={currentUser}
                post={post}
                handlePostDelete={handlePostDelete}
            />
            {post?.comments.map(comment => (
                <CommentCard
                    currentUser={currentUser}
                    comment={comment}
                    handleCommentDelete={handleCommentDelete}
                />
            ))}
        </div>
    )
}

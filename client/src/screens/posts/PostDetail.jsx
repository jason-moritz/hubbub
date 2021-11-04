import { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import { getOnePost } from '../../services/posts'
import { deleteComment } from '../../services/comments'

export default function PostDetail({ currentUser, posts, setPosts, handlePostDelete }) {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)
    const [toggle, setToggle] = useState(false)
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        const fetchPost = async () => {
            const postData = await getOnePost(id)
            setPost(postData)
            setComments(postData.comments)
            setToggle(true)
        }
        fetchPost()
    },[id])

    const handleCommentDelete = async (post_id, comment_id) => {
        await deleteComment(post_id, comment_id)
        setToggle(false)
        setComments(prevState => prevState.filter(comment => comment.id !== comment_id))
        const associatedPost = posts.find(post => post.id === post_id).comments.filter(comment => comment.id !== comment_id)
        setPosts(prevState => prevState.map((post) => {
            return post.id === post_id ? associatedPost : post 
        }))  
        setToggle(true)
    }

    if (!toggle) return <h3>loading</h3>

    return (
        <div>
            <PostCard
                currentUser={currentUser}
                post={post}
                handlePostDelete={handlePostDelete}
            />
            {comments.map(comment => (
                <CommentCard
                    currentUser={currentUser}
                    comment={comment}
                    handleCommentDelete={handleCommentDelete}
                />
            ))}
        </div>
    )
}

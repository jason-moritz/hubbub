import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import { getOnePost } from '../../services/posts'
import { deleteComment } from '../../services/comments'
import { Button } from '@mui/material'
import BackButton from '../../components/BackButton'
import './PostDetail.css'

export default function PostDetail({
  currentUser,
  posts,
  setPosts,
  handlePostDelete,
}) {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)
  const [toggle, setToggle] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id)
      setPost(postData)
      setComments(postData.comments)
      setToggle(true)
    }
    fetchPost()
  }, [id])

  const handleCommentDelete = async (post_id, comment_id) => {
    await deleteComment(post_id, comment_id)
    setToggle(false)
    setComments(prevState =>
      prevState.filter(comment => comment.id !== comment_id)
    )

    const associatedPost = posts.find(post => post.id === post_id)
    const deletedCommentIndex = associatedPost.comments.findIndex(
      comment => comment.id === comment_id
    )
    associatedPost.comments.splice(deletedCommentIndex, 1)

    setPosts(prevState =>
      prevState.map(post => {
        return post.id === post_id ? associatedPost : post
      })
    )

    setToggle(true)
  }

  if (!toggle) return <h3>loading</h3>

  return (
    <div className='postdetail-overall-container'>
      <div className='postdetail-left-container'></div>
      <div className='postdetail-main-container'>
        <BackButton location='posts' />
        <PostCard
          currentUser={currentUser}
          post={post}
          handlePostDelete={handlePostDelete}
        />
        <Link
          className='postdetail-link'
          to={`/posts/${post.id}/comments/create`}
        >
          <Button>
            <span className='button-link-comment'>Add your two cents</span>
          </Button>
        </Link>
      </div>
      {comments ? (
        <div className='postdetail-comments-container'>
          {comments.map((comment, index) => (
            <div key={index} className='postdetail-comments-card'>
              <CommentCard
                currentUser={currentUser}
                comment={comment}
                handleCommentDelete={handleCommentDelete}
              />
            </div>
          ))}
        </div>
      ) : null}
      <div className='postdetail-right-container'></div>
    </div>
  )
}

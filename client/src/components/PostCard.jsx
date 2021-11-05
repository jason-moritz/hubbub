import './PostCard.css'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

export default function PostCard({ currentUser, post, handlePostDelete }) {
  const { id } = useParams()

  return (
    <div className='post-card'>
      <div className='post-card-user'>
        <img className='avatar' src={post.user?.image_url} alt='profile-pic' />
        <h3 className='username'>{post.user?.username}</h3>
      </div>
      <div className='post-card-title'>
        <h5>{post?.title}</h5>
      </div>
      {id ? (
        <>
          <div className='post-card-content'>
            <h5>{post?.content}</h5>
          </div>
          {currentUser && currentUser.id === post?.user_id ? (
            <div className='post-card-edit-delete'>
              <Link className='post-card-link' to={`/posts/${post.id}/update`}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => handlePostDelete(post.id)}>Delete</Button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className='post-card-comment-counter'>
            <ChatBubbleOutlineIcon />
            <h5 className='comment-counter'>{post.comments?.length}</h5>
          </div>
          <div className='post-card-link'>
            <Link className='post-card-link' to={`/posts/${post.id}`}>
              <Button>Read more!</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

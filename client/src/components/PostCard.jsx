import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import DefaultAvatar from '../assets/default_avatar.png'
import DefaultAvatar2 from '../assets/default_avatar2.png'
import DefaultAvatar3 from '../assets/default_avatar3.png'
import './PostCard.css'

export default function PostCard({ currentUser, post, handlePostDelete }) {
  const { id } = useParams()

  const rotateAvatar = () => {
    const avatars = [DefaultAvatar, DefaultAvatar2, DefaultAvatar3]
    return avatars[Math.floor(Math.random() * 2)]
  }

  return (
    <div className='post-card'>
      <div className='post-card-user'>
        <img
          className='avatar'
          src={post.user?.image_url ? post.user?.image_url : rotateAvatar()}
          alt='profile-pic'
        />
        <h3 className='username'>{post.user?.username}</h3>
      </div>
      <div className='post-card-title'>{post?.title}</div>
      {id ? (
        <>
          {post.image_url ? (
            <img
              className='post-card-image-preview'
              src={post?.image_url}
              alt='post-attachment-preview'
            />
          ) : null}
          <div className='post-card-content'>{post?.content}</div>
          {currentUser && currentUser.id === post?.user_id ? (
            <div className='post-card-edit-delete'>
              <Link className='post-card-link' to={`/posts/${post.id}/update`}>
                <Button>
                  <span className='post-card-button-link'>Edit</span>
                </Button>
              </Link>
              <Button onClick={() => handlePostDelete(post.id)}>
                <span className='post-card-button-link'>Delete</span>
              </Button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className='post-card-comment-counter'>
            <ChatBubbleOutlineIcon fontSize='inherit' />
            <h5 className='comment-counter'>{post.comments?.length}</h5>
          </div>
          <div className='post-card-link'>
            <Link className='post-card-link' to={`/posts/${post.id}`}>
              <Button>
                <span className='button-link'>Read more!</span>
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

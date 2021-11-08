import './CommentCard.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import DefaultAvatar from '../assets/default_avatar.png'
import DefaultAvatar2 from '../assets/default_avatar2.png'
import DefaultAvatar3 from '../assets/default_avatar3.png'

export default function CommentCard({
  currentUser,
  comment,
  handleCommentDelete,
}) {
  const rotateAvatar = () => {
    const avatars = [DefaultAvatar, DefaultAvatar2, DefaultAvatar3]
    return avatars[Math.floor(Math.random() * 2)]
  }

  return (
    <div className='comment-card'>
      <div className='comment-card-user'>
        <img
          className='comment-avatar'
          src={
            comment?.user.image_url ? comment?.user.image_url : rotateAvatar()
          }
          alt='profile-pic'
        />
        <h3 className='comment-username'>{comment?.user.username}</h3>
      </div>
      <div className='comment-card-content'>
        <h5>{comment?.content}</h5>
      </div>
      {currentUser && currentUser.id === comment?.user_id ? (
        <div className='comment-edit-delete'>
          <Link
            className='comment-card-link'
            to={`/posts/${comment.post_id}/comments/${comment.id}/update`}
          >
            <Button>
              <span className='comment-card-button-link'>Edit</span>
            </Button>
          </Link>
          <Button
            onClick={() => handleCommentDelete(comment.post_id, comment.id)}
          >
            <span className='comment-card-button-link'>Delete</span>
          </Button>
        </div>
      ) : null}
    </div>
  )
}

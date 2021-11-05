import './CommentCard.css'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'

export default function CommentCard({
  currentUser,
  comment,
  handleCommentDelete,
}) {
  const { id } = useParams()

  return (
    <div className='comment-card'>
      <div className='comment-card-user'>
        <img
          className='avatar'
          src={comment?.user.image_url}
          alt='profile-pic'
        />
        <h3 className='username'>{comment?.user.username}</h3>
      </div>
      <div className='comment-card-content'>
        <h5>{comment?.content}</h5>
      </div>
      {currentUser && currentUser.id === comment?.user_id ? (
        <>
          <Link
            className='comment-card-link'
            to={`/posts/${comment.post_id}/comments/${comment.id}/update`}
          >
            <Button>Edit</Button>
          </Link>
          <Button
            onClick={() => handleCommentDelete(comment.post_id, comment.id)}
          >
            Delete
          </Button>
        </>
      ) : null}
    </div>
  )
}

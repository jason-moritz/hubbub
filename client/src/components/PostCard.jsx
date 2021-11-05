import './PostCard.css'
import { Link, useParams } from 'react-router-dom'

export default function PostCard({ currentUser, post, handlePostDelete }) {
  const { id } = useParams()

  return (
    <div className='post-card'>
      <div className='post-card-user'>
        <img src={post.user?.image_url} alt='profile-pic' />
        <h3>{post.user?.username}</h3>
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
              <Link to={`/posts/${post.id}/update`}>Edit</Link>
              <button onClick={() => handlePostDelete(post.id)}>Delete</button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className='post-card-comment-counter'>
            <h5>Comments: {post.comments?.length}</h5>
          </div>
          <div className='post-card-link'>
            <Link to={`/posts/${post.id}`}>Read more!</Link>
          </div>
        </>
      )}
    </div>
  )
}

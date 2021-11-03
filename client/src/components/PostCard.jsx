import './PostCard.css'
import { Link, useParams } from 'react-router-dom'


export default function PostCard({ currentUser, post, handlePostDelete }) {
    const { id } = useParams()

    return (
        <div className='post-card'>
            <img src={post?.user.image_url} alt='profile-pic' />
            <h3>{post?.user.username}</h3>
            <h5>{post?.title}</h5>
            {id ? (
                <>
                    <h5>{post?.content}</h5>
                    {currentUser && currentUser.id === post?.user_id ? (
                        <>
                            <Link to={`/posts/${post.id}/update`}>Edit</Link>
                            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                        </>
                    ) : (null)
                    }
                    {post?.comments.map((comment, index) => (
                        <div key={index}>
                            <h5>{comment.user.username}</h5>
                            <img src={comment.user.image_url} alt='profile-pic' />
                            <h5>{comment.content}</h5>
                            {currentUser && currentUser.id === comment?.user_id ? (
                                <>
                                    <Link to={`/posts/${post.id}/comments/${comment.id}/update`}>Edit</Link>
                                    <button onClick={() => handlePostDelete(comment.id)}>Delete</button>
                                </>
                            ) : (null)
                            }
                        </div>
                    ))}
                </>
            ) : (
                <>    
                    <h5>Comments: {post.comments.length}</h5>
                    {currentUser && currentUser.id === post?.user_id ? (
                        <>
                            <Link to={`/posts/${post.id}/update`}>Edit</Link>
                            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                        </>
                    ) : (null)
                    }
                    <Link to={`/posts/${post.id}`}>Read more!</Link>
                </>
            )}
        </div>
    )
}

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

import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'


export default function Posts({ currentUser, posts, handlePostDelete }) {
    return (
        <div>
            <h1>All the Hubbub</h1>
                {posts.map((post, index) => (
                    <div key={index}>
                        <PostCard
                            post={post}
                        />
                        {currentUser && currentUser.id === post.user_id &&
                            <>
                                <Link to={`/posts/${post.id}/update`}>Edit</Link>
                                <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                            </>
                        }
                        <Link to={`/posts/${post.id}`}>Read more!</Link>
                    </div>
                ))}
        </div>
    )
}

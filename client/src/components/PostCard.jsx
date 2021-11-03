import './PostCard.css'


export default function PostCard({ post }) {
    return (
        <div className='post-card'>
            <img src={post.user.image_id} alt='profile-pic' />
            <h3>{post.user.username}</h3>
            <h5>{post.title}</h5>
            <h5>Comments: {post.comments.length}</h5>
        </div>
    )
}

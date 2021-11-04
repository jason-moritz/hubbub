import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'


export default function Home({ currentUser, latestPosts, handlePostDelete }) {
    return (
        <div>
            {currentUser ? (
                <>
                    <h1>Welcome back {currentUser.username}!</h1>
                    <br /> 
                    <h3>
                        Let everyone know what's
                        on your mind <Link to='/posts/create'>here</Link>
                    </h3>
                </>
            ) : (
                <>
                    <h1>Welcome to Hubbub!</h1>
                    <br />
                    <h3>
                        <Link to='/register'>Sign up</Link>
                        today and see what all the hubbub is about.    
                    </h3>
                </>
            )}
            <div>
                <h3>Latest Posts</h3>
                <div>
                    {latestPosts.map(latestPost => (
                        <div key={latestPost.id}>
                            <PostCard
                                currentUser={currentUser}
                                post={latestPost} 
                                handlePostDelete={handlePostDelete}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

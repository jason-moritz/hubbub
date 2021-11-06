import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import './Home.css'

export default function Home({ currentUser, latestPosts, handlePostDelete }) {
  return (
    <div>
      {currentUser ? (
        <>
          <h1 className='home-welcome-message'>
            Welcome {currentUser.username}!
          </h1>
          <br />
          <div className='home-helper-text'>
            Let everyone know what's on your mind{' '}
            <Link className='home-link' to='/posts/create'>
              here
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className='home-welcome-message'>Welcome to Hubbub!</h1>
          <br />
          <div className='home-helper-text'>
            <span>
              <Link className='home-link' to='/register'>
                Sign up
              </Link>{' '}
            </span>
            today and see what all the hubbub is about.
          </div>
        </>
      )}
      <br />
      <br />
      <div>
        <div className='home-latest-post-title'>Latest Posts</div>
        <div className='home-latest-post-container'>
          {latestPosts.map(latestPost => (
            <div key={latestPost.id} className='home-latest-post-container'>
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

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import BackButton from '../../components/BackButton'
import { Button } from '@mui/material'
import './Posts.css'

export default function Posts({ currentUser, posts, handlePostDelete }) {
  if (!posts.length) return <h3>loading</h3>

  return (
    <div>
      <BackButton location='' />
      <h1>All the Hubbub</h1>
      <Link className='user-login-link' to='/posts/create'>
        <Button>Create Post</Button>
      </Link>
      <div className='posts-allposts-container'>
        {posts?.map((post, index) => (
          <div key={index} className='posts-allposts-container'>
            <PostCard
              currentUser={currentUser}
              post={post}
              handlePostDelete={handlePostDelete}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

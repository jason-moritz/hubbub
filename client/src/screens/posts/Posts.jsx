import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'


export default function Posts({ currentUser, posts, handlePostDelete }) {
    return (
        <div>
            <h1>All the Hubbub</h1>
                {posts?.map((post, index) => (
                    <div key={index}>
                        <PostCard
                            currentUser={currentUser}
                            post={post}
                            handlePostDelete={handlePostDelete}
                        />
                    </div>
                ))}
        </div>
    )
}

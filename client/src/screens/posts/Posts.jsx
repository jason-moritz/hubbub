import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'


export default function Posts({ currentUser, posts, handlePostDelete }) {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setToggle(true)
    },[])
    if (!toggle) return <h3>loading</h3>

    return (
        <div>
            <h1>All the Hubbub</h1>
                {posts.map((post, index) => (
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

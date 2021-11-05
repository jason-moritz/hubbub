import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'


export default function Header({ currentUser, handleLogout }) {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} alt='hubbub-logo' />
            </Link>
            {currentUser ? (
                <div>
                    <p>Welcome {currentUser.username}</p>
                    <Link to='/update'>
                        <button>Update User Info</button>
                    </Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
            <Link to='/login'>Login/Register</Link>
            )}
            <Link to='/posts'>Posts</Link>
            {currentUser ? (
                <Link to='/posts/create'>Create</Link>
            ) : (null)}
        </header>
    )
}

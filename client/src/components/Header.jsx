import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'


export default function Header({ user, handleLogout }) {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} alt='hubbub-logo' />
            </Link>
            {user ? (
                <div>
                    <p>Welcome {user}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
            <Link to='/login'>Login/Register</Link>
            )}
            <Link to='/posts'>Posts</Link>
        </header>
    )
}

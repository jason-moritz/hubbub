import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, Menu, MenuItem } from '@mui/material'

export default function Header({ currentUser, handleLogout }) {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(prevToggle => (prevToggle = !prevToggle))
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='hubbub-logo' />
      </Link>
      <div>
        <Button
          id='menu-button'
          aria-controls='nav-menu'
          aria-haspopup='true'
          aria-expanded={toggle ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id='nav-menu'
          open={toggle}
          onClose={handleClick}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
        >
          {currentUser ? (
            <div>
              <MenuItem>
                <p>Welcome {currentUser.username}</p>
              </MenuItem>
              <MenuItem>
                <Link to='/update'>
                  <button>Update User Info</button>
                </Link>
              </MenuItem>
              <MenuItem>
                <button onClick={handleLogout}>Logout</button>
              </MenuItem>
            </div>
          ) : (
            <MenuItem>
              <Link to='/login'>Login/Register</Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link to='/posts'>Posts</Link>
          </MenuItem>
          <MenuItem>
            {currentUser ? <Link to='/posts/create'>Create</Link> : null}
          </MenuItem>
        </Menu>
      </div>
    </header>
  )
}

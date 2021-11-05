import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Menu, MenuItem } from '@mui/material'

export default function Header({ currentUser, handleLogout }) {
  const [toggle, setToggle] = useState(null)
  const open = Boolean(toggle)
  const handleClick = e => {
    setToggle(e.currentTarget)
  }

  const handleClose = () => {
    setToggle(null)
  }

  return (
    <header className='header'>
      <div>
        <Button
          id='menu-button'
          aria-controls='nav-menu'
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {toggle === null ? (
            <MenuIcon sx={{ fontSize: 60 }} />
          ) : (
            <CloseIcon sx={{ fontSize: 60 }} />
          )}
        </Button>
        <Menu
          id='nav-menu'
          anchorEl={toggle}
          open={open}
          onClose={handleClose}
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
      <Link to='/'>
        <img className='logo' src={logo} alt='hubbub-logo' />
      </Link>
    </header>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../assets/logo.png'
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

  const logout = () => {
    handleLogout()
    handleClose()
  }

  return (
    <header className='header'>
      <div>
        <div className='header-hamburger-button'>
          <Button
            id='menu-button'
            aria-controls='nav-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            sx={{ p: 0 }}
            onClick={handleClick}
          >
            {toggle === null ? (
              <MenuIcon sx={{ fontSize: 40, p: 0 }} />
            ) : (
              <CloseIcon sx={{ fontSize: 40, p: 0 }} />
            )}
          </Button>
        </div>
        <Menu
          id='nav-menu'
          anchorEl={toggle}
          open={open}
          onClose={handleClose}
          transitionDuration={600}
        >
          {currentUser ? (
            <div>
              <MenuItem>
                <p className='welcome-user-message'>
                  Welcome {currentUser.username}
                </p>
              </MenuItem>
            </div>
          ) : (
            <MenuItem>
              <Link className='header-navlink' to='/login'>
                <Button onClick={handleClose}>Login/Register</Button>
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link className='header-navlink' to='/posts'>
              <Button onClick={handleClose}>Posts</Button>
            </Link>
          </MenuItem>
          {currentUser ? (
            <>
              <MenuItem>
                <Link className='header-navlink' to='/posts/create'>
                  <Button onClick={handleClose}>Create</Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className='header-navlink' to='/update'>
                  <Button onClick={handleClose}>Update User Info</Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Button onClick={logout}>Logout</Button>
              </MenuItem>
            </>
          ) : null}
        </Menu>
      </div>
      <Link to='/'>
        <img className='logo' src={Logo} alt='hubbub-logo' />
      </Link>
    </header>
  )
}

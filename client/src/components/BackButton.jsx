import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
import './BackButton.css'

export default function BackButton({ location }) {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/${location}`)
  }

  return (
    <div className='back-button'>
      <Button onClick={handleClick}>
        <span className='button-link'>Go Back</span>
      </Button>
    </div>
  )
}

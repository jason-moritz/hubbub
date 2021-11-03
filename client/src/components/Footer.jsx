import { Link } from 'react-router-dom'
import './Footer.css'


export default function Footer() {
    return (
        <footer className='footer'>
            <Link to={{ pathname: 'https://www.linkedin.com/in/jason-moritz' }} target='_blank'>LinkedIn</Link>
            <Link to={{ pathname: 'https://www.github.com/jason-moritz' }} target='_blank'>Github</Link>
        </footer>
    )
}

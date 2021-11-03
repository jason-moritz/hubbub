import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css'


export default function Layout({ children, user, handleLogout }) {
    return (
        <>
            <Header 
                user={user}
                handleLogout={handleLogout}
            />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </>
    )
}

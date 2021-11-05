import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css'

export default function Layout({ children, currentUser, handleLogout }) {
  return (
    <>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className='layout-children'>{children}</div>
      <Footer />
    </>
  )
}

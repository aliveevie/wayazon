import '../styles/mobileHeader.css'
import { Link } from 'react-router-dom'
export function MobileHeader(){
    return (
        <div className='mobile-header'>
            <nav className="mobile-sideBar">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}
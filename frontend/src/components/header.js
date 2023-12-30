import '../styles/header.css'
import logo from '../images/logo.png'


export function Header({mobile, handleMobile}){
    return (
        <div className='header' id="header-menu" >
            <div className="logo" >
                <img  src={logo} alt="Wayazone logo"  width="70" />
            </div>
            <nav className="navBar" id='desktop-menu' >
                <a href="" >About Us</a>
                <a href="" >Contact Us</a>
                <a href="">Categories</a>
                <a href="">Home</a>
            </nav>
            <div  id="hamburger"  onClick={handleMobile} >&#x2630;</div>
        </div>
    )
}
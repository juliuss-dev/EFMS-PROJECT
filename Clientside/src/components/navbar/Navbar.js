import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
function Navbar() {

        const [click, setClick] = useState(false);
    return (
        <nav className="navbar">
            {/* <Link to ="/"> */}
                <div className="nav-logo">
                    <img src="./img/UNC_LOGO.png" alt="" />
                </div>
            {/* </Link> */}

            <ul className={click ? "nav-menu" : "nav-links"}
                onClick={() => setClick(false)}
            >
            <Link to = '/' className="home">
                    <li>Home</li>
            </Link>
            {/* <Link to = '/reservation' className="reservation">
                    <li>Reservation</li>
            </Link> */}

            <Link to = '/contact' className="contact">
                    <li>Contact Us</li>
            </Link>

            <Link to = '/about' className="about">
                    <li>About</li>
            </Link>
            </ul>
            {/* mobile menu */}
            <button className="menu-icon" 
            onClick={() => setClick(!click)}>
            {click ? <FaTimes/> : <FaBars/>}
            </button>
        </nav>
    )
}

export default Navbar

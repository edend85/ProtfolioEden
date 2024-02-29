import '../styles/Styels.css';
import Logo from '../assets/Images/eden-logos_black_111.png'
export default function Menu() {

    return (
        <nav className='mobile-navbar'>
            <div className="burger-navbar">
                <div className="container nav-container">
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="menu-items">
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                    </div>
                </div>
            </div>
        </nav>

    )
}

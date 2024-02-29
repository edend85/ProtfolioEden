import '../styles/Styels.css';
import { HashLink } from 'react-router-hash-link';
import EDCV from '../assets/Documents/edendayanCV.pdf'
import Logo from '../assets/Images/eden-logos_black_111.png'

export default function Navbar() {
  return (
    <>
      <div className='nav-frame'>
        <div>
          <div className='logo-link'>
            <img src={Logo} />
          </div>
        </div>
        <div className='navbar'>
          <nav>
            <ul>
              <li><HashLink to="#projects-grid">Protfolio</HashLink></li>
              <li><HashLink to="#main-about">About</HashLink></li>
              <li><HashLink to="#footer">Contact</HashLink></li>
              <a href={EDCV} download="Eden Dayan CV" target='_blank' >
                <button style={{ fontSize: "16px" }}>Resume</button>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </>

  )
}

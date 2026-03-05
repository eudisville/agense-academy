import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from './assets/facebook.png'
import Linkedin from './assets/linkedin.png'
import Mail from './assets/e-mail.png'
import Instagram from './assets/instagram.png'
import './styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <h4>© 2026 Agense Academy. Conçut par Beriverse.</h4>
      </div>
      <div className="footer-right">
        <Link to="mailto:agense.academy@gmail.com" target='_blank'><img src={Mail} alt="" /></Link>
        <Link to="https://www.instagram.com/lagense_academy?igsh=MXEwbDRvcjduZ2FoNw%3D%3D&utm_source=qr" target='_blank'><img src={Instagram} alt="" /></Link>
        <Link to="https://www.facebook.com/share/1BuG83cxBG/?mibextid=wwXIfr" target='_blank'><img src={Linkedin} alt="" /></Link>
        <Link to="https://www.linkedin.com/posts/l-agense-academy_agenseacademy-formationpratique-innovation-activity-7426614719911870465-xJ0Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEU8Zv0BGUdFYJl3dlO7qggKAj6tdseALwU" target='_blank'><img src={Facebook} alt="" /></Link>
      </div>
    </div>
  )
}

export default Footer
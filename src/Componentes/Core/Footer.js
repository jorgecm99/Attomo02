import React from 'react';
import footerBack from '../../Assets/Images/Mobile/Rectangle 97.png';
import  logoGranada from '../../Assets/Images/Mobile/logogranada.png';
import  logoBstadium from '../../Assets/Images/Mobile/logobstadium.png';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-one'>
        <h2>contacto</h2>
        <div>
          <p>Contacta con nosotros</p>
          <p>+34 618 45 36 90</p>
          <p>hola@bstadium.es</p>
        </div>
      </div>
      <div className='footer-two'>
        <img className='footer-two-img' src={footerBack} alt=''></img>
        <div>
          <p></p>
          <button></button>
          <div>
            <img className='logo-one' src={logoGranada}alt=''></img>
            <img className='logo-one' src={logoBstadium} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
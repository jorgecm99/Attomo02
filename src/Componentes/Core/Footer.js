import React from 'react';
import footerBack from '../../Assets/Images/Mobile/Rectangle 97.png';
import  logoGranada from '../../Assets/Images/Mobile/logogranada.png';
import cierre from '../../Assets/Images/Mobile/Bstadium.png';
import './Footer.css';
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-one'>
        <h2 className='margin-bt-zero'><FormattedMessage id='footer.desktop.one' defaultMessage="Contacto"/></h2>
        <div className='footer-one-para'>
          <p><strong><FormattedMessage id='footer.mobile.onedate'/></strong></p>
          <p>+34 618 45 36 90</p>
          <p>hola@bstadium.es</p>
        </div>
      </div>
      <div className='footer-two'>
        <img className='footer-two-img' src={footerBack} alt=''></img>
        <div className='footer-two-container'>
          <p><FormattedMessage id='footer.desktop.second' values={{b:(chunks)=> <strong style={{fontSize:'40px', color:'white', fontFamily:'Livvic-semi'}}>{chunks}</strong>}}/></p>
          <button className='footer-btn'><a target="_blank" rel="noopener noreferrer" className='footer-btn' href='https://bstadium.es/granada-cf/tour-por-el-nuevo-los-carmenes-estadio-de-granada-cf/' ><FormattedMessage id='footer.mobile.button'/></a></button>
          <div className='footer-two-images'>
            <img className='logo-one' src={logoGranada}alt=''></img>
          </div>
          
        </div>
        <div className='footer-cierre'>
          <p className='footer-cierre-text'>Powered by</p>
          <img src={cierre} alt=""></img>
        </div>
        
      </div>
    </div>
  )
}

export default Footer